import React, { useContext, useRef, useState } from 'react'
import "./Principal.css"
import { Header } from '../../componentes/layout/Header/Header' 
import { Main } from '../../componentes/layout/Main/Main'
import { Footer } from '../../componentes/layout/Footer/Footer'
import { Tasks } from '../../componentes/Tasks/Tasks'
import { ItemTask } from '../../componentes/ItemTask/ItemTask'
import { tasksContext } from '../../componentes/Context/Context'





export const Principal = () => {



  const context = useContext(tasksContext)

  const titleRef = useRef('')
  const descripcionRef = useRef('')

  const counter = useRef(1)
  const transTasks = () =>{
    const idTas = context.idTask 
    const title = titleRef.current.value
    const description = descripcionRef.current.value
    const id = counter.current++
    const state = 'state'
    context.setTask([...context.tasks,{ idTas,title,description,id,state}])
    titleRef.current.value=''
    descripcionRef.current.value=''
  }

  const chek = () =>{
    const state = 'state'


  }

  return (
    <>
      <Header>

      </Header>
      <Main>
       <div className='board' id='board'>
         <div className='containerTI'>
           <p>Titulo de la tarea</p>
           <input ref={titleRef} type="text"  placeholder='Ingresa el titulo' name="" id="inputTitle"  className='title'/>
         </div>
         <div className='containerPI'>
           <p>Descripcion de la tarea</p>
           <input ref={descripcionRef} type="text" name="information" id="information" className='information'/>
           <button onClick={transTasks} id='creatTask'>Crear Tarea</button>
         </div>
       </div>
       <div className='containerTitle'>
        <h1>Usted tiene x cantidad de tareas completadas y x tareas pendientes</h1>
       </div>
       <div className='containerFiltrer'>
        <p>Filtrar :</p>
        <select name="" id="">
          <option value="">Todas las tareas</option>
          <option value="">Pendientes</option>
          <option value="">Resueltas</option>
        </select>
       </div>
       <section>
       <div className='containerTasks'>
        <Tasks>

          {context.tasks.map(task => <ItemTask
          idTask={task.idTask}
          title={task.title}
          text={task.description}
          state={task.state}
          />)}
        </Tasks>
        </div>
       </section>
      </Main>
      <Footer>

      </Footer>
    </>
  )
}
