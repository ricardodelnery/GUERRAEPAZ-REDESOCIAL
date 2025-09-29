// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  identifier: string, 
  limit: number = 10, 
  windowMs: number = 60000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const key = `${identifier}:${Math.floor(now / windowMs)}`;
  
  const current = rateLimitMap.get(key) || { count: 0, resetTime: now + windowMs };
  
  if (now > current.resetTime) {
    current.count = 0;
    current.resetTime = now + windowMs;
  }
  
  current.count++;
  rateLimitMap.set(key, current);
  
  return {
    allowed: current.count <= limit,
    remaining: Math.max(0, limit - current.count)
  };
}
