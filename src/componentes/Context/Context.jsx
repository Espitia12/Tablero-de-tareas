import { createContext,useState } from "react";


export const tasksContext =createContext()

export const TasksProvider = ({children}) =>{
    const  [tasks,setTask] = useState([]); 
    return(
        <tasksContext.Provider value={{tasks,setTask}}>
            {children}
        </tasksContext.Provider>
    )

}