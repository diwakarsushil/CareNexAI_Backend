const express = require('express');
const {
  bookAppointment,
  getAppointments,
  getAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} = require('../controllers/appointmentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/book').post(bookAppointment);
router.route('/').get(getAppointments);
router.route('/:id').get(getAppointment).put(updateAppointment).delete(deleteAppointment);

module.exports = router;
