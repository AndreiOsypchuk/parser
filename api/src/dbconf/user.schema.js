const mongoose = require('mongoose');
exports.User = mongoose.model('User', {
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
<<<<<<< HEAD
  modules: { type: [String], enum: ['price-parcer', 'some-other', 'none'], required: true}, 
=======
  modules: { type: [String], enum: ['parser', 'none'], default: 'none' },
>>>>>>> volumes
});
