import styled from 'styled-components'
import { BodyM, COLORS } from 'web-components'

export const Container = styled.div`
  max-width: 500px;
  padding: 15px;
  margin: 20px 0px;
  border-radius: 8px;
  border: 1px solid ${COLORS.DARK_LOW};
  ${BodyM} {
    margin: 0;
  }
`
