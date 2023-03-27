export interface Response<Type> {
  error?: boolean
  success?: boolean
  message?: string
  errorCode: string
  data: Type
}
