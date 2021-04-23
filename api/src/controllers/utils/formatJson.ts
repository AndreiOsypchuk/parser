import { v4 as uuidv4 } from 'uuid';

export const formatData = (obj: any) => {
  let arr = [];
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
