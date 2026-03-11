import { RateLimitOptions } from "../types/index.js";
import { ALGORITHM } from "../constants/index.js"
import { TokenBucket } from "../algorithms/index.js";

const DEFAULT_CAPACITY = 10;
const DEFAULT_REFILL_RATE = 1; // tokens per second

class RateLimiterFactory {
  static create(config: RateLimitOptions) {
    const capacity = config.capacity ?? DEFAULT_CAPACITY;
    const refillRate = config.refillRate ?? DEFAULT_REFILL_RATE;

    switch (config.algorithm) {
      case ALGORITHM.TOKEN_BUCKET:
        return new TokenBucket(capacity, refillRate)

      default:
        throw new Error(`Unsupported algorithm: ${config.algorithm}`)
    }
  }
}

export { RateLimiterFactory };