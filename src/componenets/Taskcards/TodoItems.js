import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/addItems';
//import {dragdrop} from './utils/dragdrop';

function TodoItems({itemid, card:{task, id}}) {
  const [taskAdded, modifytaskAdded] = useState(task)
  const [inputActive, setInputActive] = useState(false);
  const dispatch = useDispatch();
  
  const removeList = () =>{
    dispatch(
      todoActions.removeTask({
        id,
        itemid
      }))
  }
  
  function editTask(){
    setInputActive(true)
  }

  function updatetask(){
    dispatch(todoActions.updateTask({
      id,
      itemid,
      taskAdded
    }))
    setInputActive(false)
  }

  
  return (
    <div className='todo-items draggable' draggable="true" >
      {
        !inputActive ? <p className='tasks'>{taskAdded}</p>
        :
        <input multiple disabled={!inputActive} className="input-task"  value={taskAdded}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            if(taskAdded.length > 0){
              updatetask();
            }
         }
        }}
          onChange={(e) => modifytaskAdded(e.target.value)}
          />
      }
      <div className='action-btns'>
      {
        !inputActive &&
         <i className='fa fa-pencil' onClick={editTask}></i>  
      }
        <i className='fa fa-close' onClick={removeList}></i>
      </div>
    </div>
  )
}

export default TodoItems