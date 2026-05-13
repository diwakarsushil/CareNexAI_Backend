const express = require('express');
const {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');

const router = express.Router();

router.route('/').get(getDoctors).post(createDoctor);
router.route('/:id').get(getDoctor).put(updateDoctor).delete(deleteDoctor);

module.exports = router;
