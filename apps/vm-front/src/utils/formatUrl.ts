export function formatUrl(endpoint: string, parmas: Record<string, any> = {}) {
  
  const paramsString = Object
  .entries(parmas)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');
  
  return `${import.meta.env.VITE_BACKEND_URL}${endpoint}?${paramsString}`;
}