const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    Appointment_ID: {
      type: String,
      required: [true, 'Please add an appointment ID'],
      unique: true,
      trim: true,
    },
    Patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: [true, 'Please add a patient'],
    },
    Doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'Please add a doctor'],
    },
    AppointmentDate: {
      type: Date,
      required: [true, 'Please add an appointment date'],
    },
    TimeSlot: {
      type: String,
      required: [true, 'Please add a time slot (e.g., 10:00 AM)'],
    },
    Status: {
      type: String,
      enum: ['Scheduled', 'Completed', 'Cancelled'],
      default: 'Scheduled',
    },
    ReasonForVisit: {
      type: String,
      required: [true, 'Please add a reason for the visit'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
