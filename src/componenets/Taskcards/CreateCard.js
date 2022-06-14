import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/addItems';


function CreateCard() {
  const dispatch = useDispatch();
   function createCard(){
        dispatch(todoActions.createTaskCard())
   }

   const btnref = useRef();
   useEffect(() => {
       btnref.current.click();
   }, [])
  return (
    <>
       <span ref={btnref} onClick={createCard} className='create-card-btn fa fa-plus'></span>
    </>
  )
}

export default CreateCard