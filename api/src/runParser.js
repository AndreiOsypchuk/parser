const { spawn } = require('child_process');

exports.runParser = async (url, cb) => {
  const pyprog = spawn('python3', ['main.py', url]);

  pyprog.stdout.on('data', (data) => {
    cb(data.toString());
  });

  pyprog.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  pyprog.stdout.on('close', (code) => {
    console.log('Exited with code ', code);
  });
};
