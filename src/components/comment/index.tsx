import { FC } from 'react'
import { Container } from './styles'
import { BodyM, COLORS, Icon } from 'web-components'

interface CommentBoxProps {
  name: string
  stars: number
  comment?: string
  tabIndex?: number
}

const CommentBox: FC<CommentBoxProps> = ({ name, stars, comment, tabIndex }) => {
  const returnStars = () => {
    const elements = []
    for (let index = 0; index < 5; index++) {
      elements.push(<Icon
        iconName={`${index <= stars -1 ? 'filledStart' : 'star'}`}
        classes=''
        fill={COLORS.PRIMARY}
        width={24}
        height={24}
      />)
    }
    return elements
  }
  return (
    <Container tabIndex={tabIndex} aria-label='Cometário'>
      <BodyM bold>Nome: {name}</BodyM>
      {returnStars()}
      <BodyM bold>Comment: </BodyM>
      <p>{comment}</p>
    </Container>
  )
}

export default CommentBox
