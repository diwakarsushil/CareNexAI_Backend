const express = require('express');
const {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(getDoctors).post(protect, createDoctor);
router.route('/:id').get(getDoctor).put(protect, updateDoctor).delete(protect, deleteDoctor);

module.exports = router;
