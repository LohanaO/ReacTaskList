import React from 'react';
import { task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponet from '../pure/task';
import { useState,useEffect } from 'react';
import '../../styles/task.scss'



const TaksListComponent = () => {
    //Estado del componente

    const defaultTask = new task('Example','Default Description',true,LEVELS.NORMAL);


    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente

    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
        console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    const changeCompleted =(id)=>{
        console.log('Cambiar Estado de una tarea');
    }


    return (
        <div className='col-12'>
        <div className='card'>
        {/**Card header (Title) */}
        <div className='card-header p-3 '>
            <h5>Your Tasks:</h5>
        </div>
        {/**Card Body (Content)  */}
        <div className='card-body' data-mb-perfect-scrollbar='true' style={{position:'relative',height:'400px'}}>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
               
                <tbody>
                     {/*TODO Iterar sobre una lista de tareas */}
                     <TaskComponet task={defaultTask}></TaskComponet>
                </tbody>
            </table>
        </div>

        </div>
        
    
    
            {/*TODO: APLICAR UN FOR/MAP PARA RENDERIZAR UNA LIST DE TAREAS */}
           
        </div>
    );
};




export default TaksListComponent;
