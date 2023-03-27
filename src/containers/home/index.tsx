import { FC } from 'react'
import { DisplayFont, HeadingM, Loading } from 'web-components'
import CommentBox from '../../components/comment'
import NavBar from '../../components/NavBar'
import { useComments } from '../../contexts/comments'
import { Container } from './styles'

const Home: FC = () => {
  const { comments, loading } = useComments()
  return (
    <>
      <NavBar />
    <Container>
      <DisplayFont>
        Net Promoter Score (NPS)
      </DisplayFont>
      <p>
        O Net Promoter Score (NPS) é uma métrica utilizada para avaliar a satisfação e a lealdade dos clientes em relação a uma empresa ou produto. Criado por Fred Reichheld em 2003, o NPS é amplamente utilizado por empresas de todo o mundo como uma ferramenta para medir a eficácia de suas estratégias de atendimento ao cliente e de fidelização.
      </p>
      <p>
        O NPS é calculado a partir de uma pergunta simples: "Em uma escala de 0 a 10, o quanto você recomendaria nossa empresa/produto/serviço para um amigo ou colega?". Com base nas respostas dos clientes, as empresas podem dividir seus clientes em três categorias: promotores (9-10), neutros (7-8) e detratores (0-6).
      </p>
      <p>
        Os promotores são clientes satisfeitos e leais que tendem a recomendar a empresa ou produto para outras pessoas. Eles são considerados o grupo mais valioso para a empresa, pois ajudam a atrair novos clientes e a aumentar a receita. Os neutros são clientes que não são muito entusiasmados com a empresa ou produto, mas também não têm uma opinião negativa.
      </p>

      <HeadingM>
        Nossas avaliações
      </HeadingM>
      {
        loading ?
        <Loading />:
        comments &&
        comments.map(commentItem => {
          const { _id, name, stars, comment} = commentItem
          return (<CommentBox key={_id!} name={name} stars={stars} comment={comment!} />)
        })
      }
    </Container>
    </>
  )
}

export default Home
