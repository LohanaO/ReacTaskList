
import React from 'react';
import PropTypes from 'prop-types';
import { task } from '../../models/task.class';
import { useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
//Importamos la hoj de estilos de task.scss.
import '../../styles/task.scss';


const TaskComponet = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created task');
    return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);
    //Funtion that returns a Badge
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb=0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>);
             case LEVELS.URGENT:
             return(<h6 className='mb=0'>
                 <span className='badge bg-warning'>{task.level}</span>
             </h6>);
              case LEVELS.BLOckING:
              return(<h6 className='mb=0'>
                  <span className='badge bg-danger'>{task.level}</span>
              </h6>);
        
            default:
                break;
        }
    }
    //Funtion that returns icon dipending on completion of task
        function TaskCompletedIcon(){
           if (task.completed) {
                return (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color:'green', fontWeight:'bold'}}></i>)
           }
            else{
                return (<i onClick={()=>complete(task)}  className='bi-toggle-off task-action' style={{color:'grey', fontWeight:'bold'}}></i>)
            }
            }    
                   
        
    const taskCompleted={
        color: 'gray',
        textDecoration: 'line-through'

    }
    const taskPending={
        color: 'tomato',
        fontWeight: 'bold'
    }
    
    return (

        <tr className='fw-normal task-action' style={(task.completed) ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='aling-middle'>
            <span className='ms-2'>{task.description}</span>
            </td>
            <td className='aling-middle'>
            {/*Ejecucion de la funcion Badge de level */}
            {taskLevelBadge()}
            </td>
            <td className='aling-middle'>
            {/* Execution of funtion to return icon depending on completion */}
            {TaskCompletedIcon()}
           
              <i onClick={()=>remove(task)} className='bi-trash' style={{color:'tomato'}}></i>
            </td>
            
            
            

        </tr>
      
    );
};


TaskComponet.propTypes = {
task: PropTypes.instanceOf(task).isRequired,
complete: PropTypes.func.isRequired,
remove: PropTypes.func.isRequired

};


export default TaskComponet;

