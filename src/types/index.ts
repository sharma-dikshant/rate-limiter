import { ALGORITHM } from "../constants/index.js"

interface RateLimitOptions {
  algorithm: ALGORITHM
  capacity?: number    // max tokens in the bucket (default: 10)
  refillRate?: number  // tokens added per second (default: 1)
}

interface RateLimitStrategy {
  consume(): Promise<boolean>
}

export type { RateLimitOptions, RateLimitStrategy }