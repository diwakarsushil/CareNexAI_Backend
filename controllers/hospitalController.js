const hospitalService = require('../services/hospitalService');

const createHospital = async (req, res, next) => {
  try {
    const hospital = await hospitalService.createHospital(req.body);
    res.status(201).json({ success: true, data: hospital });
  } catch (error) {
    next(error);
  }
};

const getHospitals = async (req, res, next) => {
  try {
    const hospitals = await hospitalService.getHospitals();
    res.status(200).json({ success: true, count: hospitals.length, data: hospitals });
  } catch (error) {
    next(error);
  }
};

const getHospital = async (req, res, next) => {
  try {
    const hospital = await hospitalService.getHospitalById(req.params.id);
    if (!hospital) {
      res.status(404);
      throw new Error(`Hospital not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: hospital });
  } catch (error) {
    next(error);
  }
};

const updateHospital = async (req, res, next) => {
  try {
    const hospital = await hospitalService.updateHospital(req.params.id, req.body);
    if (!hospital) {
      res.status(404);
      throw new Error(`Hospital not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: hospital });
  } catch (error) {
    next(error);
  }
};

const deleteHospital = async (req, res, next) => {
  try {
    const hospital = await hospitalService.deleteHospital(req.params.id);
    if (!hospital) {
      res.status(404);
      throw new Error(`Hospital not found with ID: ${req.params.id}`);
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHospital,
  getHospitals,
  getHospital,
  updateHospital,
  deleteHospital,
};
