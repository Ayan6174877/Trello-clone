import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
const cards = [
    {
      id: '1',
      task: 'Italian Bread',
    },
    {
      id: '2',
      task: 'Speghathi',
    },
    {
      id: '3',
      task: '1% Milk',
    },
    {
      id: '4',
      task: 'Chicken Wings',
    },
    {
      id: '5',
      task: 'Orange juice',
    },
    {
      id: '6',
      task: 'Flour',
    },
  ];

  const cards2 = [
    {
      id:7,
      task: 'Chapter 15 homework',
    },
    {
      id:8,
      task: 'Midterm practice exams',
    },
    {
      id:9,
      task: 'chapter 16.1 problem',
    },
  ];
  
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        itemLists: [
        {
            id:1,
            title: 'Grocery Store',
            cards
        },
        {
            id:2,
            title: 'calc III',
            cards: cards2
        },
    ],
    },
    reducers: {
        createTaskCard(state){
          state.itemLists.push({
            id: uuid(),
            title: 'New task',
            cards: []
          });
        },
        addTask(state, action){
            // get the index of the created taskcard
            const index = state.itemLists.findIndex((item) => item.id === action.payload.itemid)
            state.itemLists[index].cards.push({
              id: action.payload.id,
              task: action.payload.task
            });
          },
          //updating the taskz--
          updateTask(state, action){
             // get the index of the created taskcard
             const index = state.itemLists.findIndex((item) => item.id === action.payload.itemid)
             const taskindex = state.itemLists[index].cards.findIndex((item) => item.id === action.payload.id)
             state.itemLists[index].cards[taskindex].task = action.payload.task;
         },
         // removing the tasks from the card
          removeTask(state, action){
             state.itemLists = state.itemLists.map((element) => {
                return {...element, cards: element.cards.filter((subElement) => subElement.id !== action.payload.id)}
            })
          },
          //update the card header
           // remove the card from the container when delet button is clicked
           updateCard(state, action){
            const index = state.itemLists.findIndex((item) => item.id === action.payload.itemid)
            state.itemLists[index].title = action.payload.cardHeader;
           },
          // remove the card from the container when delet button is clicked
            removeCard(state, action){
              state.itemLists = state.itemLists.filter((items) => items.id !== action.payload.userid);
            }
         },
})

export const todoActions = todoSlice.actions;
export default todoSlice;
