import { FC } from 'react'
import { Icon, COLORS } from 'web-components'
import { Container } from './styles'

interface IStarRateProps {
  rate: number
  setRate: (number: number) => void
}

const StarRate: FC<IStarRateProps> = ({rate, setRate}) => {
  const generateStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          onClick={() => {setRate(i+1)}}
          key={`start${i}`}
          aria-label={`Nota em estrela ${i}`}
          tabIndex={i+1}
          data-testid={`star${i+1}`}
        >
          <Icon
            iconName={`${rate <= i ? 'star' : 'filledStart'}`}
            classes=''
            fill={COLORS.PRIMARY}
            width={24}
            height={24}
          />
        </span>
      )
    }
    return stars
  }
  return (
    <Container>
      {generateStars()}
    </Container>
  )
}

export default StarRate
