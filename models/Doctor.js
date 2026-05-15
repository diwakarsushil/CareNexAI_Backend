const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    Doctor_ID: {
      type: String,
      required: [true, 'Please add a doctor ID'],
      unique: true,
      trim: true,
    },
    Doctor_Name: {
      type: String,
      required: [true, 'Please add a doctor name'],
      trim: true,
    },
    Specialty: {
      type: String,
      required: [true, 'Please add a specialty'],
    },
    Rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    Hospital_ID: {
      type: String,
      required: [true, 'Please add a hospital ID association'],
      trim: true,
    },
    Availability: {
      type: Boolean,
      default: true,
    },
    schedule: [
      {
        day: {
          type: String,
        },
        timings: [
          {
            type: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Doctor', doctorSchema);
