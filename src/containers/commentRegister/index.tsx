import {FC, useContext, useState} from 'react'
import {HeadingM, BodyM, Button, Toaster} from 'web-components'

import logo from '../../serasa-logo-full.svg'
import {Container, FormContainer} from './styles'
import ModalBox from '../../components/modalBox'
import StarRate from '../../components/starRate'
import {CommentsContext} from '../../contexts/comments'

interface IForm {
  name: string
  comment?: string
  stars: number
}

interface IMessage {
  message: string
  variant: 'success' | 'error'
}

const defaultValues = {name: '', comment: '', stars: 0}

const CommentRegister: FC = () => {
  const {postComments} = useContext(CommentsContext)
  const [rate, setRate] = useState(0)
  const [formInfos, setFormInfos] = useState<IForm>(defaultValues)
  const [message, setMessage] = useState<IMessage | null>(null)

  const setRating = (rate: number) => {
    setRate(rate)
  }

  const handleChange = (
    event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  ) => {
    setFormInfos({
      ...formInfos,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (rate <= 0) {
      setMessage({message: 'Preencha a nota', variant: 'error'})
    } else {
      const obj = {
        name: formInfos['name'],
        comment: formInfos['comment'],
        stars: rate,
      }
      postComments(obj)
      setMessage({message: 'Obrigado por avaliar nossos serviços.', variant: 'success'})
    }
  }
  return (
    <ModalBox>
      <Container>
        <img src={logo} alt="logotipo" />
        <HeadingM className="title">
          Conte o quanto você está satisfeito com nossos serviços
        </HeadingM>
        <FormContainer onSubmit={e => handleSubmit(e)}>
          {message && (
            <Toaster variant={message.variant} data-testid="toaster">
              <HeadingM>{message.message}</HeadingM>
            </Toaster>
          )}
          <BodyM bold> Marque de 1 à 5 estrelas</BodyM>
          <StarRate rate={rate} setRate={setRating} aria-label="Nota em estrelas" />
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            aria-label="Nome"
            onChange={e => handleChange(e)}
            value={formInfos['name']}
            data-testid="name"
            required
          />
          <label htmlFor="comment">Comentário(Opcional)</label>
          <textarea
            name="comment"
            aria-label="Comentário"
            onChange={e => handleChange(e)}
            data-testid="comment"
            value={formInfos['comment']}
          />
          <Button type="submit" data-testid="submitButton">
            Enviar avaliação
          </Button>
        </FormContainer>
      </Container>
    </ModalBox>
  )
}

export default CommentRegister
