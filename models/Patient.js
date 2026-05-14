const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    Patient_ID: {
      type: String,
      required: [true, 'Please add a patient ID'],
      unique: true,
      trim: true,
    },
    FullName: {
      type: String,
      required: [true, 'Please add a full name'],
      trim: true,
    },
    MobileNumber: {
      type: String,
      required: [true, 'Please add a mobile number'],
      unique: true,
      trim: true,
    },
    DateOfBirth: {
      type: Date,
      required: [true, 'Please add a date of birth'],
    },
    City: {
      type: String,
      required: [true, 'Please add a city'],
    },
    PreferredLanguage: {
      type: String,
      default: 'English',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Patient', patientSchema);
