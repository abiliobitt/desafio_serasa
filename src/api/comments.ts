import axios from 'axios'
import { IComment } from '../interfaces/comment'
import { IResponse } from '../interfaces/response'

export interface ICommentsResponseData {
  comments? : IComment[]
}

export type RequestComments = IResponse<ICommentsResponseData>

export const apiGetComments = (): Promise<IComment[]> => {
  const comments = axios.get(`${process.env.REACT_APP_API_URL}/comments`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log('error', error)
    })
  return comments
}

export const apiPostComments = (data: IComment): Promise<IComment[]> => {
  const comments = axios.post(`${process.env.REACT_APP_API_URL}/comments`, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log('error', error)
    })
  return comments
}
