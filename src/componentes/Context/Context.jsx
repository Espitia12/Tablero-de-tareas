import { createContext,useState } from "react";


export const tasksContext =createContext()

export const TasksProvider = ({children}) =>{
    const  [tasks,setTask] = useState([]); 
    const [filteredTaks,setFilteredTaks] = useState([])
    const toggleState = (taskId, newState) => {
        setTask(prevTasks => {
            return prevTasks.map(task => {
                if (task.idTask === taskId) {
                    return { ...task, state: newState };
                }
                return task;
            });
        });
    };
    return(
        <tasksContext.Provider value={{tasks,setTask,filteredTaks,setFilteredTaks, toggleState}}>
            {children}
        </tasksContext.Provider>
    )

}