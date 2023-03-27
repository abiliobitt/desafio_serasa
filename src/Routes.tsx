import { FC, ReactElement } from 'react'
import {
  BrowserRouter, Route, Routes as Router
} from 'react-router-dom'
import Home from './containers/home'

const Routes: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
