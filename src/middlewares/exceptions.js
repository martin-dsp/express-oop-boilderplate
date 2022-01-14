const exceptions = (err, req, res, next) => {

  const status = err.status || 500;
  const message = err.message;

  res.status(status).send({
    status,
    message,
  });

  next();
};
export default exceptions;
