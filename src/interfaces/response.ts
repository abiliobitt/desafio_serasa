export interface IResponse<Type> {
  error?: boolean
  success?: boolean
  message?: string
  errorCode: string
  data: Type
}
