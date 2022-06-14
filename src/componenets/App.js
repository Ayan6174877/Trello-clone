import './App.css';
import '../styles/index.scss';
import Card from './Taskcards/Card';
import React from 'react'
import { useSelector } from "react-redux";
import CreateCard from './Taskcards/CreateCard';

function App() {
  const dataItem = useSelector((state) => state.todo.itemLists)

  return (
    <div className="app">
      {
        dataItem.map((list) => {
              return <Card list={list} key={list.id} />
        })
      } 
      <CreateCard />
    </div>
  );
}

export default App;
