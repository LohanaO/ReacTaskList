import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { task } from '../../models/task.class'
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import Taskform from '../pure/forms/TaskForm';

const TaskListComponent = () => {

    const defaultTask1 = new task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new task('Example3', 'Description 3', false, LEVELS.BLOckING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Detele this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = ()=>{
        return (
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
                     { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove = {deleteTask}
                        >
                        </TaskComponent>
                    )
                }
            )}
                </tbody>
        </table>)
    }
   
    let TaskTable;
    (tasks.length > 0)? (TaskTable=<Table></Table>): 
                        TaskTable=  <div>
                                        <h3> There are no tasks to show</h3>
                                        <h4>Please, create one</h4>
                                    </div>
   

    const loadingStyle={
        color:'grey',
        fontSize:'20px',
        fontWeight:'bold',
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card mb-3'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : TaskTable}
            </div>
            <Taskform add={addTask} length={tasks.length}></Taskform>
        </div>
        </div>
    );
};


export default TaskListComponent;
