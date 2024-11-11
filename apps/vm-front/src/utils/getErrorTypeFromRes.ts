export function getErrorTypeFromRes(res: Response) {
  if (res.status === 401) {