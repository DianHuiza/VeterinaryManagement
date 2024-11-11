import { ForbidenError } from './errors/Forbiden'
import { NotFoundError } from './errors/NotFound'
import { UnauthorizedError } from './errors/Unauthorized'

export function getErrorTypeFromRes(res: Response) {
  switch (res.status){
    case 404:
      return new NotFoundError()
    
    case 401:
      return new UnauthorizedError()
    
    case 403:
      return new ForbidenError()
    
    default:
      return new Error('UnexpectedError')
  }    
}