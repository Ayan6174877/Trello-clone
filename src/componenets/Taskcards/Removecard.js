import React from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/addItems';

function Removecard(props) {
     const dispatch = useDispatch();
    const removeCard = () => {
        dispatch(todoActions.removeCard({
            userid: props.itemid
        }))
    }

    return (
        <div className='removecard'>
            <button onClick={removeCard} className='btn'>Delete</button>
        </div>
    )
    }

export default Removecard