const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');

const createPatient = async (patientData) => {
  const patient = await Patient.create(patientData);
  return patient;
};

const getPatients = async () => {
  const patients = await Patient.find();
  return patients;
};

const getPatientById = async (id) => {
  const patient = await Patient.findOne({ Patient_ID: id });
  if (!patient) return null;

  // Fetch appointments for this patient using their MongoDB _id
  const appointments = await Appointment.find({ Patient: patient._id }).populate('Doctor', 'Doctor_ID Doctor_Name Specialty').sort({ AppointmentDate: 1 });

  const now = new Date();

  const upcomingAppointments = appointments.filter(app => app.AppointmentDate >= now && app.Status !== 'Cancelled');
  const pastAppointments = appointments.filter(app => app.AppointmentDate < now || app.Status === 'Cancelled');

  // Convert mongoose document to plain object to attach custom fields
  const patientObj = patient.toObject();
  patientObj.upcomingAppointments = upcomingAppointments;
  patientObj.pastAppointments = pastAppointments;

  return patientObj;
};

const getPatientByMobile = async (mobile) => {
  const patient = await Patient.findOne({ MobileNumber: mobile });
  if (!patient) return null;

  // Use the same logic as getPatientById to fetch and format appointments
  // Note: Since getPatientById now expects Patient_ID, we pass patient.Patient_ID
  return await getPatientById(patient.Patient_ID);
};

const updatePatient = async (id, patientData) => {
  const patient = await Patient.findOneAndUpdate({ Patient_ID: id }, patientData, {
    new: true,
    runValidators: true,
  });
  return patient;
};

const deletePatient = async (id) => {
  const patient = await Patient.findOneAndDelete({ Patient_ID: id });
  if (patient) {
    // Note: Appointment still references Patient by MongoDB _id
    await Appointment.deleteMany({ Patient: patient._id });
  }
  return patient;
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  getPatientByMobile,
  updatePatient,
  deletePatient,
};
