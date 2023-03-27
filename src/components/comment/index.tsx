import { FC } from 'react'
import { Container } from './styles'
import { BodyM } from 'web-components'

interface CommentBoxProps {
  name: string
  stars: number
  comment?: string
}

const CommentBox: FC<CommentBoxProps> = ({name, stars, comment}) => {
  return (
    <Container>
      <BodyM bold>Nome: {name}</BodyM>
      <p>Stars: {stars}</p>
      <p>Comment: {comment}</p>
    </Container>
  )
}

export default CommentBox
