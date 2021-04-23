const mongoose = require('mongoose');
exports.User = mongoose.model('User', {
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  modules: { type: [String], enum: ['parser', 'none'], default: 'none' },
});
