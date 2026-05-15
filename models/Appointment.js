const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    Appointment_ID: {
      type: String,
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

// Pre-save hook to generate Appointment_ID
appointmentSchema.pre('save', async function () {
  if (!this.Appointment_ID) {
    const lastAppointment = await this.constructor.findOne({}, {}, { sort: { 'createdAt' : -1 } });
    let newNumber = 1;

    if (lastAppointment && lastAppointment.Appointment_ID) {
      const lastId = lastAppointment.Appointment_ID; // e.g., "A001"
      const lastNumber = parseInt(lastId.substring(1)); // e.g., 1
      newNumber = lastNumber + 1;
    }

    // Format to A001, A002, etc.
    this.Appointment_ID = `A${newNumber.toString().padStart(3, '0')}`;
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
