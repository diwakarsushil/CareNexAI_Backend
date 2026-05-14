const appointmentService = require('../services/appointmentService');

const bookAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.bookAppointment(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    next(error);
  }
};

const getAppointments = async (req, res, next) => {
  try {
    const appointments = await appointmentService.getAppointments();
    res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    next(error);
  }
};

const getAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.getAppointmentById(req.params.id);
    if (!appointment) {
      res.status(404);
      throw new Error(`Appointment not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    next(error);
  }
};

const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!status) {
      res.status(400);
      throw new Error('Please provide a status to update');
    }
    const appointment = await appointmentService.updateAppointmentStatus(req.params.id, status);
    if (!appointment) {
      res.status(404);
      throw new Error(`Appointment not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    const appointment = await appointmentService.deleteAppointment(req.params.id);
    if (!appointment) {
      res.status(404);
      throw new Error(`Appointment not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  getAppointment,
  updateAppointmentStatus,
  deleteAppointment,
};
