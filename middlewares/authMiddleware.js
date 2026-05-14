const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // 1. Get token from header
      token = req.headers.authorization.split(' ')[1];

      // 2. Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretkey123');
      console.log('Token Decoded:', decoded);

      // 3. Get admin from the token
      req.admin = await Admin.findById(decoded.id).select('-password');

      if (!req.admin) {
        console.error('Admin not found in database for ID:', decoded.id);
        res.status(401);
        return next(new Error('Not authorized, admin no longer exists'));
      }

      next();
    } catch (error) {
      console.error('JWT Verification Error:', error.message);
      res.status(401);
      next(new Error('Not authorized, token failed'));
    }
  }

  if (!token) {
    console.warn('No Authorization header found');
    res.status(401);
    next(new Error('Not authorized, no token'));
  }
};

module.exports = { protect };