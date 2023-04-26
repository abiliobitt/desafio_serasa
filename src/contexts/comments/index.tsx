import {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {apiGetComments, apiPostComments} from '../../api/comments'

import {IComment} from '../../interfaces/comment'

interface ICommentsContext {
  comments?: IComment[]
  loading?: boolean
  getComments?: () => Promise<IComment[]>
  postComments: (data: IComment) => Promise<IComment[]>
}
const defaultValue: ICommentsContext = {
  comments: [],
  loading: false,
  postComments: apiPostComments,
}
export const CommentsContext = createContext<ICommentsContext | typeof defaultValue>(defaultValue)

export const useComments = (): ICommentsContext => {
  const context = useContext(CommentsContext)
  if (context == null) {
    throw new Error('useComments must be used within an CommentsContext')
  }

  return context
}

export const CommentsProvider: FC<PropsWithChildren> = ({children}): ReactElement => {
  const [comments, setComments] = useState<IComment[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getComments = useCallback(async (): Promise<IComment[]> => {
    setLoading(true)
    const data = await apiGetComments()
    setComments(data)
    setLoading(false)
    return data
  }, [setComments, setLoading])

  const postComments = useCallback(
    async (comment: IComment): Promise<IComment[]> => {
      setLoading(true)
      const data = await apiPostComments(comment)
      setComments(comments => [...comments, comment])
      setLoading(false)
      return data
    },
    [setComments, setLoading],
  )

  useEffect(() => {
    getComments()
  }, [getComments])
  return (
    <CommentsContext.Provider
      value={{
        comments,
        loading,
        postComments,
      }}>
      {children}
    </CommentsContext.Provider>
  )
}
