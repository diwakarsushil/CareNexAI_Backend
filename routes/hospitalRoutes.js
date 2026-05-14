const express = require('express');
const {
  createHospital,
  getHospitals,
  getHospital,
  updateHospital,
  deleteHospital,
} = require('../controllers/hospitalController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(getHospitals).post(protect, createHospital);
router.route('/:id').get(getHospital).put(protect, updateHospital).delete(protect, deleteHospital);

module.exports = router;
