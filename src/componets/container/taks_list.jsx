import React from 'react';
import { task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponet from '../pure/task';
import { useState,useEffect } from 'react';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/TaskForm';



const TaksListComponent = () => {
    //Estado del componente

    const defaultTask1 = new task('Example1','Description1',true,LEVELS.NORMAL);

    const defaultTask2 = new task('Example2',' Description2',false,LEVELS.URGENT);

    const defaultTask3 = new task('Example3',' Description3',false,LEVELS.BLOckING);




    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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

                {tasks.map((task, index)=>{
                    return( 
                        <TaskComponet
                            key={index}
                            task={task}>
                        </TaskComponet>
                        )
                    }
                )}
                
                </tbody>
            </table>
        </div>
                        <TaskForm></TaskForm>
        </div>
        
        </div>
    );
};




export default TaksListComponent;
