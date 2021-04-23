export const paginate = (arr, pagelen) => {
  const res = [];
  let page = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % pagelen === 0 && i !== 0) {
      res.push(page);
      page = [];
    }
    arr[i].order = i;
    page.push(arr[i]);
  }
  res.push(page);
  return { data: res, pages: res.length };
};
