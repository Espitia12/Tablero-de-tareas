import React from 'react'
import "./Principal.css"
import { Header } from '../../componentes/layout/Header/Header' 
import { Main } from '../../componentes/layout/Main/Main'

export const Principal = () => {
  return (
    <>
      <Header>

      </Header>
      <Main>
       <div className='board' id='board'>
         <div className='containerTI'>
           <p>Titulo de la tarea</p>
           <input type="text"  placeholder='Ingresa el titulo' name="" id="inputTitle"  className='title'/>
         </div>
         <div className='containerPI'>
           <p>Descripcion de la tarea</p>
           <input type="text" name="information" id="information" className='information'/>
           <button id='creatTask'>Crear Tarea</button>
         </div>
       </div>
      </Main>
    </>
  )
}
