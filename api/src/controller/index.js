const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const authRouter = express.Router();
const apiRouter = express.Router();
const { User } = require('../dbconf/user.schema');
const { formatData } = require('./format');
const { runParser } = require('../runParser');
const loginBodyValidator = (req, res, next) => {
  if (req.body.login && req.body.password) return next();
  res.status(400).json({ message: 'Invalid request body' });
};

authRouter.post('/login', loginBodyValidator, async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (user) {
      const matched = await bcrypt.compare(password, user.hash);
      if (matched) {
        res.status(200).json({ success: true });
      } else {
        res.status(403).json({ success: false });
      }
    } else {
      res.status(403).json({ success: false });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

apiRouter.get('/', async (req, res) => {
  try {
    const { siteName } = req.query;
    if (siteName) {
      fs.readFile(`${siteName}.json`, (err, data) => {
        if (err) {
          res.status(400).json({ message: err.code });
        } else {
          const parsed = JSON.parse(data);
          res.json(formatData(parsed));
        }
      });
    } else {
      res.status(400).json({ message: 'Insufficient query' });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

apiRouter.get('/sites', (req, res) => {
  try {
    const rawSites = fs.readFileSync('sites.json');
    const parsedSites = JSON.parse(rawSites);
    res.json(parsedSites);
  } catch (e) {
    res.status(500).json({ message: e.message });
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
