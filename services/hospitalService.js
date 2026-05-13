const Hospital = require('../models/Hospital');

const createHospital = async (data) => {
  return await Hospital.create(data);
};

const getHospitals = async () => {
  return await Hospital.find();
};

const getHospitalById = async (id) => {
  return await Hospital.findOne({ Hospital_ID: id });
};

const updateHospital = async (id, data) => {
  return await Hospital.findOneAndUpdate({ Hospital_ID: id }, data, {
    new: true,
    runValidators: true,
  });
};

const deleteHospital = async (id) => {
  return await Hospital.findOneAndDelete({ Hospital_ID: id });
};

module.exports = {
  createHospital,
  getHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
};
