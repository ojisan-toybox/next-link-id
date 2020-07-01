export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]));
};
