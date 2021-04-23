const mongoose = require('mongoose');
exports.User =
  mongoose.models.User ||
  mongoose.model('User', {
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    modules: { type: [String], required: true, default: [] },
  });
