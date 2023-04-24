import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { task } from '../../../models/task.class';

const TaskForm = ({add}) => {

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


    return (
        <form onSubmit={addTask} className='d-flex justify-content-ccenter align-items-center m4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
                <input ref={descRef} id='inputDesc' type='text' className='form-control form-control-lg' required placeholder='Task Description' />
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='SelectLevel'>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOckING}>
                        Blocking
                    </option>

                </select>
               
            </div>
                    <button type='submit' className='btn btn-success btn-lg ms-2'>Add Task</button>
        </form>
    );
}

TaskForm.prototypes={
    add: PropTypes.func.isRequired
}
export default TaskForm;
