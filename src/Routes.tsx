import {FC, ReactElement} from 'react'
import {BrowserRouter, Route, Routes as Router} from 'react-router-dom'
import CommentRegister from './containers/commentRegister'
import Home from './containers/home'

const Routes: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/registrar-comentario" element={<CommentRegister />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
