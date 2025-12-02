const customLogger = (req, res, next) => {
  console.log(
    `Custom Log → ${req.method} ${req.originalUrl} at ${new Date().toLocaleString()}`
  );
  next(); // pass control to next middleware
};

export default customLogger;
