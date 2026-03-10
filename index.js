/**
 * Middleware function
 */
function middleware(req, res, next) {
  const isAllowed = rateLimiter();
  if (isAllowed) return next();
  return res.status(409).send("Too Many Request.");
}

/**
 *
 * @param {*} config
 * @returns
 */
function rateLimiter() {
  return token_bucket();
}

/**
 * TOKEN BUCKET IMPLEMENTATION
 */
const limit = 10;
const speed = 1000; // in ms
let tokens = limit;

setInterval(() => {
  tokens = Math.min(tokens + speed, limit);
}, speed);

function token_bucket() {
  if (tokens) {
    tokens -= 1;
    return true;
  }

  return false;
}

module.exports = middleware;
