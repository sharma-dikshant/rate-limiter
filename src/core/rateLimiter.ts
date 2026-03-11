import { RateLimitStrategy } from "../types/index.js"

class RateLimiter {
  constructor(private strategy: RateLimitStrategy) {}

  consume(): Promise<boolean> {
    return this.strategy.consume()
  }
}

export { RateLimiter };