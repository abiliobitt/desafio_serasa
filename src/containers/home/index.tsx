import {FC} from 'react'
import {Link} from 'react-router-dom'

import {BodyM, DisplayFont, HeadingM, Loading} from 'web-components'
import CommentBox from '../../components/commentBox'
import NavBar from '../../components/NavBar'
import {useComments} from '../../contexts/comments'
import {Container} from './styles'

const Home: FC = () => {
  const {comments, loading} = useComments()
  return (
    <>
      <NavBar />
      <Container>
        <DisplayFont tabIndex={0}>Net Promoter Score (NPS)</DisplayFont>
        <p tabIndex={1}>
          O Net Promoter Score (NPS) é uma métrica utilizada para avaliar a satisfação e a lealdade
          dos clientes em relação a uma empresa ou produto. Criado por Fred Reichheld em 2003, o NPS
          é amplamente utilizado por empresas de todo o mundo como uma ferramenta para medir a
          eficácia de suas estratégias de atendimento ao cliente e de fidelização.
        </p>
        <p tabIndex={2}>
          O NPS é calculado a partir de uma pergunta simples: Em uma escala de 0 a 10, o quanto
          recomendaria nossa empresa/produto/serviço para um amigo ou colega?. Com base nas
          respostas dos clientes, as empresas podem dividir seus clientes em três categorias:
          promotores (9-10), neutros (7-8) e detratores (0-6).
        </p>
        <p tabIndex={3}>
          Os promotores são clientes satisfeitos e leais que tendem a recomendar a empresa ou
          produto para outras pessoas. Eles são considerados o grupo mais valioso para a empresa,
          pois ajudam a atrair novos clientes e a aumentar a receita. Os neutros são clientes que
          não são muito entusiasmados com a empresa ou produto, mas também não têm uma opinião
          negativa.
        </p>

        <HeadingM tabIndex={4}>Nossas avaliações</HeadingM>
        <BodyM bold tabIndex={5}>
          Quer nos avaliar? <span> </span>
          <Link
            to="/registrar-comentario"
            tabIndex={6}
            aria-label="Link para avaliar serviços"
            data-testid="ratingLink">
            Clique aqui.
          </Link>
        </BodyM>
        {loading ? (
          <Loading />
        ) : (
          comments &&
          comments.map(commentItem => {
            const lastTabIndex = 7
            const {id, name, stars, comment} = commentItem
            return (
              <CommentBox
                key={id!}
                name={name}
                stars={stars}
                comment={comment!}
                tabIndex={lastTabIndex}
              />
            )
          })
        )}
      </Container>
    </>
  )
}

export default Home
