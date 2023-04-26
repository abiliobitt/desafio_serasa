import {ReactElement} from 'react'
import {CommentsProvider} from './contexts/comments'

export default function Providers({children}: {children: ReactElement}): ReactElement {
  return <CommentsProvider>{children}</CommentsProvider>
}
