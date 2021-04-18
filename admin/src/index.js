const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

const { AdminRouter, adminBro } = require('./adminconf/index');
const { establishDbConnection } = require('./dbconf/connection');

// cross-origin-isolation for chrome's deprecation of SharedArrayBuffer in
// AdminBro
app.all('*', (req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.use(adminBro.options.rootPath, AdminRouter);
(async () => {
  const PORT = process.env.PORT || 4001;
  await establishDbConnection((res) => console.log(res));
  app.listen(PORT, () => console.log('running on', PORT));
})();
