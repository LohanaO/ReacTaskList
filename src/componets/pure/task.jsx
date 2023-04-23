
import React from 'react';
import PropTypes from 'prop-types';
import { task } from '../../models/task.class';
import { useEffect } from 'react';
//Importamos la hoj de estilos de task.scss.
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponet = ({ task }) => {

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

    return (

        <tr className='fw-normal'>
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
            {task.completed ?
            (<i className='bi-toggle-on' style={{color:'green', fontWeight:'bold'}}></i>)
              : <i className='bi-toggle-off' style={{color:'grey', fontWeight:'bold'}}></i>}
              <i className='bi-trash' style={{color:'tomato'}}></i>
            </td>
            
            
            

        </tr>
      
    );
};


TaskComponet.propTypes = {
task: PropTypes.instanceOf(task)
};


export default TaskComponet;

