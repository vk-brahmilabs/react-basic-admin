module.exports = (req, res, next) => {
  res.header ('Content-Range', 'projects 0-20/20');
  next ();
};
