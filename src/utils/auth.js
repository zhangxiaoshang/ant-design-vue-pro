const currentAuth = ["admin"];
export { currentAuth };

export function getCurrentAuhtority() {
  return currentAuth;
}
export function check(authority) {
  const current = getCurrentAuhtority();
  return current.some(item => authority.includes(item));
}

export function isLogin() {
  const current = getCurrentAuhtority();
  return current && current[0] !== "guest";
}
