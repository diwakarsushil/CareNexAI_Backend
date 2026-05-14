const patientService = require('../services/patientService');

const createPatient = async (req, res, next) => {
  try {
    const patient = await patientService.createPatient(req.body);
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

const getPatients = async (req, res, next) => {
  try {
    const patients = await patientService.getPatients();
    res.status(200).json({ success: true, count: patients.length, data: patients });
  } catch (error) {
    next(error);
  }
};

const getPatient = async (req, res, next) => {
  try {
    const patient = await patientService.getPatientById(req.params.id);
    if (!patient) {
      res.status(404);
      throw new Error(`Patient not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

const getPatientByMobile = async (req, res, next) => {
  try {
    const patient = await patientService.getPatientByMobile(req.params.mobile);
    if (!patient) {
      res.status(404);
      throw new Error(`Patient not found with mobile number: ${req.params.mobile}`);
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

const updatePatient = async (req, res, next) => {
  try {
    const patient = await patientService.updatePatient(req.params.id, req.body);
    if (!patient) {
      res.status(404);
      throw new Error(`Patient not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

const deletePatient = async (req, res, next) => {
  try {
    const patient = await patientService.deletePatient(req.params.id);
    if (!patient) {
      res.status(404);
      throw new Error(`Patient not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPatient,
  getPatients,
  getPatient,
  getPatientByMobile,
  updatePatient,
  deletePatient,
};
