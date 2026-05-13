const Doctor = require('../models/Doctor');

const createDoctor = async (data) => {
  return await Doctor.create(data);
};

const getDoctors = async () => {
  return await Doctor.find();
};

const getDoctorById = async (id) => {
  return await Doctor.findOne({ Doctor_ID: id });
};

const updateDoctor = async (id, data) => {
  return await Doctor.findOneAndUpdate({ Doctor_ID: id }, data, {
    new: true,
    runValidators: true,
  });
};

const deleteDoctor = async (id) => {
  return await Doctor.findOneAndDelete({ Doctor_ID: id });
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
