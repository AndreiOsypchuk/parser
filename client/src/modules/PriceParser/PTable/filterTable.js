const checkName = (name, str) => {
  const pattern = str
    .split('')
    .map((p) => {
      return `(?=.*${p})`;
    })
    .join('');
  const re = new RegExp(`${pattern}`, 'g');
  return name.match(re);
};

export const filterTable = (table, input) => {
  return table.filter((item) => {
    return (
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      checkName(
        item.name.toLowerCase().substr(0, 3),
        input.substr(0, 3).toLowerCase()
      )
    );
  });
};
