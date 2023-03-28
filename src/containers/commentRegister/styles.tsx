import styled from 'styled-components'
import {HeadingM, BodyM,} from 'web-components'

export const Container = styled.div`
  height: auto;
  img {
    width: 150px;
    display: block;
    margin: 0 auto;
    }
    ${HeadingM} {
      text-align: center;
    }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  ${BodyM} {
    text-align: center;
  }
  input, textarea {
    background-color: #f2f2f2;
    padding: 10px;
    box-sizing: border-box;
    margin: 15px 0px;
    border: none;
    resize: none;
    border-radius: 8px;
  }
  textarea {
    height: 80px;
  }
`
