const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { hospitals, doctors } = require('./data');
const Hospital = require('../models/Hospital');
const Doctor = require('../models/Doctor');
const connectDB = require('../config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const importData = async () => {
  try {
    await Hospital.deleteMany();
    await Doctor.deleteMany();

    await Hospital.insertMany(hospitals);
    await Doctor.insertMany(doctors);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Hospital.deleteMany();
    await Doctor.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
