/**
 * Token Bucket Rate Limiter Middleware
 */

import { type Request, type Response, type NextFunction } from "express";

// --- Token Bucket State ---
const limit = 10;
const refillRate = 1; // tokens added per second
let tokens = limit;

setInterval(() => {
  tokens = Math.min(tokens + refillRate, limit);
}, 1000);

function tokenBucket(): boolean {
  if (tokens > 0) {
    tokens -= 1;
    return true;
  }
  return false;
}

// --- Middleware ---
function rateLimiter(_req: Request, res: Response, next: NextFunction): void {
  const allowed = tokenBucket();
  if (allowed) {
    next();
    return;
  }
  res.status(429).send("Too Many Requests.");
}

export default rateLimiter;
