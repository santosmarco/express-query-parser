const queryString = require("query-string");

const defaultOptions = {
  parseNumbers: true,
  parseBooleans: true,
};

const queryParser = (options) => (req, res, next) => {
  if (req.query) {
    const newQuery = queryString.parse(
      queryString.stringify(req.query),
      options ? { ...defaultOptions, ...options } : defaultOptions
    );
    for (let key in req.query) {
      req.query[key] = newQuery[key];
    }
  }
  next();
};

module.exports = queryParser;
