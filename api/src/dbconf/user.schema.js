const mongoose = require('mongoose');
exports.User = mongoose.model('User', {
  login: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
});
