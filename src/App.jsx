import React from 'react'

import {Header, Footer, MovieCard} from './components/index'
import { AllRoutes } from './Routes/AllRoutes'
import './App.css'
import './index.css'
export const App = () => {
  return (
    <div className='App'>
     
      <Header></Header>
      <AllRoutes/>
      <Footer></Footer>
      
      
    </div>
  )
}


