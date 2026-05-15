const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

const bookAppointment = async (appointmentData) => {
  // Resolve Patient_ID to MongoDB _id
  const patient = await Patient.findOne({ Patient_ID: appointmentData.Patient });
  if (!patient) throw new Error(`Patient not found with ID: ${appointmentData.Patient}`);

  // Resolve Doctor_ID to MongoDB _id
  const doctor = await Doctor.findOne({ Doctor_ID: appointmentData.Doctor });
  if (!doctor) throw new Error(`Doctor not found with ID: ${appointmentData.Doctor}`);

  // Replace custom IDs with MongoDB _ids for the model
  const dataToSave = {
    ...appointmentData,
    Patient: patient._id,
    Doctor: doctor._id
  };

  const appointment = await Appointment.create(dataToSave);
  const populated = await appointment.populate([
    { path: 'Patient', select: 'Patient_ID FullName' },
    { path: 'Doctor', select: 'Doctor_ID Doctor_Name Specialty' }
  ]);
  return populated;
};

const getAppointments = async () => {
  const appointments = await Appointment.find().populate('Patient', 'Patient_ID FullName').populate('Doctor', 'Doctor_ID Doctor_Name Specialty');
  return appointments;
};

const getAppointmentById = async (id) => {
  const appointment = await Appointment.findOne({ Appointment_ID: id }).populate('Patient', 'Patient_ID FullName').populate('Doctor', 'Doctor_ID Doctor_Name Specialty');
  return appointment;
};

const updateAppointmentStatus = async (id, status) => {
  const appointment = await Appointment.findOneAndUpdate(
    { Appointment_ID: id },
    { Status: status },
    { new: true, runValidators: true }
  ).populate('Patient', 'Patient_ID FullName').populate('Doctor', 'Doctor_ID Doctor_Name Specialty');
  return appointment;
};

const deleteAppointment = async (id) => {
  const appointment = await Appointment.findOneAndDelete({ Appointment_ID: id });
  return appointment;
};

module.exports = {
  bookAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
};
