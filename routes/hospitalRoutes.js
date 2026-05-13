const express = require('express');
const {
  createHospital,
  getHospitals,
  getHospital,
  updateHospital,
  deleteHospital,
} = require('../controllers/hospitalController');

const router = express.Router();

router.route('/').get(getHospitals).post(createHospital);
router.route('/:id').get(getHospital).put(updateHospital).delete(deleteHospital);

module.exports = router;
