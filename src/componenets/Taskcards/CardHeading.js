import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/addItems';

function CardHeading({title, itemid}) {
  const dispatch = useDispatch();
    const [cardHeader, setcardHeader] = useState(title)
    const [cardHeaderVisibility, setCardHeaderVisibility] = useState(true);

    function updatecardheader(){
      dispatch(todoActions.updateCard({
          itemid,
          cardHeader,
      }))
    }

  return (
    <div>
          {
            cardHeaderVisibility ?
             <h2 onDoubleClick={() => setCardHeaderVisibility(prevvisibility => !prevvisibility)}>
               {cardHeader}
            </h2> 
            :
             <input type="text" 
             className='input-heading'
              value= {cardHeader}
               onChange={(e) => setcardHeader(e.target.value)}
               onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if(cardHeader.length > 0){
                    setCardHeaderVisibility(prevvisibility => !prevvisibility)
                      updatecardheader();
                  }
               }
              }}
               onBlur={(e) => {
                    if(cardHeader.length > 0){
                        setCardHeaderVisibility(true)
                    }
               }}
            />
          }
    </div>
  )
}

export default CardHeading