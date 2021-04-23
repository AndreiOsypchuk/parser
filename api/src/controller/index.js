const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const authRouter = express.Router();
const apiRouter = express.Router();
const { User } = require('../dbconf/user.schema');
const { formatData } = require('./format');
const { runParser } = require('../runParser');
const loginBodyValidator = (req, res, next) => {
  if (req.body.username && req.body.password) return next();
  res.status(400).json({ success: false, message: 'Invalid request body' });
};

authRouter.post('/login', loginBodyValidator, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const matched = await bcrypt.compare(password, user.hash);
      if (matched) {
        res.status(200).json({ success: true, payload: user._doc.modules });
      } else {
        res.status(403).json({ success: false });
      }
    } else {
      res.status(403).send({ success: false });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

apiRouter.get('/', async (req, res) => {
  try {
    const { siteName } = req.query;
    console.log(siteName);
    if (siteName) {
      fs.readFile(`${siteName}.json`, (err, data) => {
        if (err) {
          console.log(err);
          res.status(400).json({ success: false, message: err.code });
        } else {
          const parsed = JSON.parse(data);
          res.status(200).json({ success: true, payload: formatData(parsed) });
        }
      });
    } else {
      res.status(400).json({ success: false, message: 'Insufficient query' });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

apiRouter.get('/sites', (req, res) => {
  try {
    const rawSites = fs.readFileSync('sites.json');
    const parsedSites = JSON.parse(rawSites);
    res.status(200).json({ success: true, payload: parsedSites });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// To be able to run script from endpoint

// apiRouter.get('/parse', async (req, res) => {
//   runParser('test', (data) => {
//     console.log(data);
//   });
//   res.send('Started parsing');
// });

exports.authRouter = authRouter;
exports.apiRouter = apiRouter;
