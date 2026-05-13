const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema(
  {
    Hospital_ID: {
      type: String,
      required: [true, 'Please add a hospital ID'],
      unique: true,
      trim: true,
    },
    Hospital_Name: {
      type: String,
      required: [true, 'Please add a hospital name'],
      trim: true,
    },
    City: {
      type: String,
      required: [true, 'Please add a city'],
    },
    State: {
      type: String,
      required: [true, 'Please add a state'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Hospital', hospitalSchema);
