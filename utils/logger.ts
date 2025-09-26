export const adminLog = (...args: any[]) => {
  try { console.log('[ADMIN]', ...args); } catch {}
}
