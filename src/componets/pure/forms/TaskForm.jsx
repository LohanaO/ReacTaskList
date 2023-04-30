import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new task(
            nameRef.current.value,
            descRef.current.value,
            false,
            levelRef.current.value
            );

            add(newTask);
    }

    const NormalStyle={
        fontWeight:'bold',
        color:'blue'

    }

    const UrgentStyle={
        fontWeight:'bold',
        color:'yellow'

    }

    const BlockingStyle={
        fontWeight:'bold',
        color:'red'

    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-ccenter align-items-center m4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg mb-3' required autoFocus placeholder='Task Name'/>
                <input ref={descRef} id='inputDesc' type='text' className='form-control form-control-lg mb-3' required placeholder='Task Description' />
                <select className='form-control form-control-lg mb-3' ref={levelRef} defaultValue={LEVELS.NORMAL} id='SelectLevel'>
                    <option style={NormalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={UrgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={BlockingStyle} value={LEVELS.BLOckING}>
                        Blocking
                    </option>

                </select>
                
                    <button type='submit' className='btn btn-success btn-lg ms-2'>
                        {length > 0 ?'Add New Task' : 'Create Your First Task' }
                    </button>
               
            </div>
                   
        </form>
    );
}

TaskForm.prototypes={
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}
export default TaskForm;
