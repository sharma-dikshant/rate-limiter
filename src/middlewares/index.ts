import { RateLimiterFactory } from "../core/rateLimiterFactory.js"
import { Request, Response, NextFunction } from "express"
import { RateLimitOptions } from "../types/index.js"

export function rateLimit(options?: RateLimitOptions) {

  const limiter = RateLimiterFactory.create(options)

  return async (_req: Request, res: Response, next: NextFunction): Promise<void> => {

    const allowed = await limiter.consume()

    if (!allowed) {
      res.status(429).send("Too many requests")
      return
    }

    next()

  }

}