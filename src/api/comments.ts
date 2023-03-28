import axios from 'axios'
import { IComment } from '../interfaces/comment'
import { Response } from '../interfaces/response'

export interface CommentsResponseData {
  comments? : IComment[]
}

export type RequestComments = Response<CommentsResponseData>

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
