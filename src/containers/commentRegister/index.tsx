import { FC, useContext, useState } from 'react'
import {HeadingM, BodyM, Button} from 'web-components'

import logo from '../../serasa-logo-full.svg';
import { Container, FormContainer } from './styles';
import ModalBox from '../../components/modalBox'
import StarRate from '../../components/starRate';
import { CommentsContext } from '../../contexts/comments';

interface IForm {
  name: string
  comment?: string
  stars: number
}

const defaultValues = { name: '', comment: '', stars: 0}

const CommentRegister : FC = () => {
  const { postComments } = useContext(CommentsContext)
  const [rate, setRate] = useState(0)
  const [formInfos, setFormInfos] = useState<IForm>(defaultValues)

  const setRating = (rate: number) => {
    setRate(rate)
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    setFormInfos({
      ...formInfos,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if(rate <= 0) {
      alert('xablau')
    } else {

      const obj = {
        name: formInfos['name'],
        comment: formInfos['comment'],
        stars: rate
      }
      postComments(obj)
    }
  }
  return (
    <ModalBox>
      <Container>
       <img src={logo} alt="logotipo" />
      <HeadingM className='title'>Conte o quanto você está satisfeito com nossos serviços</HeadingM>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <BodyM bold> Marque de 1 à 5 estrelas</BodyM>
        <StarRate rate={rate} setRate={setRating} />
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name='name'
          onChange={(e) => handleChange(e)}
          value={formInfos['name']}
          required
        />
        <label htmlFor="comment">Comentário(Opcional)</label>
        <textarea
          name="comment"
          onChange={(e) => handleChange(e)}
          value={formInfos['comment']}
        />
        <Button type='submit'>Enviar avaliação</Button>
      </FormContainer>
      </Container>
    </ModalBox>
  )
}

export default CommentRegister
