const Appointment = require('../models/Appointment');

const bookAppointment = async (appointmentData) => {
  // Add logic here to check if the doctor is available at the given time slot if needed
  const appointment = await Appointment.create(appointmentData);
  return appointment.populate(['Patient', 'Doctor']);
};

const getAppointments = async () => {
  const appointments = await Appointment.find().populate('Patient', 'Patient_ID FullName').populate('Doctor', 'Doctor_ID Doctor_Name Specialty');
  return appointments;
};

const getAppointmentById = async (id) => {
  const appointment = await Appointment.findOne({ Appointment_ID: id }).populate('Patient', 'FullName').populate('Doctor', 'Doctor_Name Specialty');
  return appointment;
};

const updateAppointmentStatus = async (id, status) => {
  const appointment = await Appointment.findByIdAndUpdate(
    id,
    { Status: status },
    { new: true, runValidators: true }
  ).populate('Patient', 'FullName').populate('Doctor', 'Doctor_Name Specialty');
  return appointment;
};

const deleteAppointment = async (id) => {
  const appointment = await Appointment.findByIdAndDelete(id);
  return appointment;
};

module.exports = {
  bookAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
};
