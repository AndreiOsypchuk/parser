const mongoose = require('mongoose');
exports.Admin =
  mongoose.models.Admin ||
  mongoose.model('Admin', {
    email: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
  });
