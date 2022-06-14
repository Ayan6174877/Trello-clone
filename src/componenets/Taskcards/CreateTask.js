import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/addItems';
import { v4 as uuid } from 'uuid';

function CreateTask({itemid}) {
const [task, settask] = useState('');
const dispatch = useDispatch();
  function submitTask(){
    dispatch(todoActions.addTask({
        itemid,
        id: uuid(),
        task
    }))
    settask('');
  }

  return (
    <div className='create-task-container'>
        <input type="text" placeholder='add a task' 
        value={task}
        onChange={(e) => settask(e.target.value)}
         />
        <i onClick={submitTask} class="fa fa-plus"></i>
    </div>
  )
}

export default CreateTask