const mongoose = require('mongoose');
exports.User =
  mongoose.models.User ||
  mongoose.model('User', {
    username: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    modules: { type: [String], enum: ['parser', 'none'], default: 'none' },
    count: { type: Number, default: 0 },
  });
