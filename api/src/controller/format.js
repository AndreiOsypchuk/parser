const { v4: uuidv4 } = require('uuid');

exports.formatData = (obj) => {
  arr = [];
  for (let key in obj) {
    arr.push({
      id: uuidv4(),
      name: key.trim(),
      price: obj[key],
    });
  }
  return arr.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};
