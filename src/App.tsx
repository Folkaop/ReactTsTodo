import React from 'react';
import './App.css';
import {TodoList} from "./ToDoList";

let tasks1 = [
    {id: 1, title : "CSS", isDone: true},
    {id: 2, title : "JS", isDone: true},
    {id: 3, title : "React", isDone: false},
]

let tasks2 = [
    {id: 1, title : "SoundZero", isDone: true},
    {id: 2, title : "SoundOne", isDone: false},
    {id: 3, title : "SoundTwo", isDone: false},
]

function App() {
    return (
        <div className="App">
            <TodoList title="What to learn" tasks={tasks1} />
            <TodoList title="Music" tasks={tasks2}/>
        </div>
    );
}

export default App;
