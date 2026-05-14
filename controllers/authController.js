const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'supersecretkey123', {
    expiresIn: '30d',
  });
};

// @desc    Register new admin (Usually you'd do this once or disable it later)
// @route   POST /api/auth/register
const registerAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const adminExists = await Admin.findOne({ username });
    if (adminExists) {
      res.status(400);
      throw new Error('Admin already exists');
    }

    const admin = await Admin.create({ username, password });
    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid admin data');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Authenticate an admin
// @route   POST /api/auth/login
const loginAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check for admin
    const admin = await Admin.findOne({ username }).select('+password');

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get admin profile
// @route   GET /api/auth/me
const getMe = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.admin.id);
    res.status(200).json({
      _id: admin._id,
      username: admin.username,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getMe,
};
