const express = require('express');
const {
  createPatient,
  getPatients,
  getPatient,
  getPatientByMobile,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');

const router = express.Router();

router.route('/').get(getPatients).post(createPatient);
router.route('/mobile/:mobile').get(getPatientByMobile);
router.route('/:id').get(getPatient).put(updatePatient).delete(deletePatient);

module.exports = router;
