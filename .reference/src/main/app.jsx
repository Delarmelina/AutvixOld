import '../common/dependencies'
import React from "react"

import { BrowserRouter } from "react-router-dom"

import Header from '../template/header'
import Sidebar from '../template/sidebar'
import Routes from './routes'

export default props => (
  <div className='wrapper dark-mode'>
    <Header name='Felipe Ferreira' email='Felipe.Ferreira@autvix.com.br' function='Analista de Automação Pleno' />
    <Sidebar />
    <Routes />
  </div>
)