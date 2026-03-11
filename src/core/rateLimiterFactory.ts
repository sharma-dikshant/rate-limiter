import { RateLimitOptions } from "../types/index.js";
import { ALGORITHM } from "../constants/index.js"
import { TokenBucket } from "../algorithms/index.js";

const DEFAULT_CAPACITY = 10;
const DEFAULT_REFILL_RATE = 1;
const DEFAULT_ALGORITHM = ALGORITHM.TOKEN_BUCKET; 

class RateLimiterFactory {
  static create(config?: RateLimitOptions) {
    const capacity = config?.capacity ?? DEFAULT_CAPACITY;
    const refillRate = config?.refillRate ?? DEFAULT_REFILL_RATE;
    const algorithm = config?.algorithm ?? DEFAULT_ALGORITHM;

    switch (algorithm) {
      case ALGORITHM.TOKEN_BUCKET:
        return new TokenBucket(capacity, refillRate)

      default:
        throw new Error(`Unsupported algorithm: ${algorithm}`)
    }
  }
}

export { RateLimiterFactory };