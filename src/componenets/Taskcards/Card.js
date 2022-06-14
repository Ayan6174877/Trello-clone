import React, { useState } from 'react'
import CardHeading from './CardHeading';
import CreateTask from './CreateTask';
import TodoItems from './TodoItems';
import { useSelector } from "react-redux";
import Removecard from './Removecard';

function Card({list}) {
  const dataItem = useSelector((state) => state.todo.itemLists)

  return (
    <>
    <div id="columns" className='card'>
        <div className='card-heading'>
        <header>
            <CardHeading title={list.title} itemid={list.id} />
         </header>
        </div>
        <div className='card-body'>
          <section>
          {list.cards.map((card) => {
              return <TodoItems key={card.id} itemid={list.id} card={card}  />
          })}
          </section>
        </div>
        <div className='card-footer'>
          <CreateTask itemid={list.id} />
          {
            dataItem.length > 1 && <Removecard itemid={list.id} />
          }
        </div>
    </div>
    </>
  )
}

export default Card;