import React, { useState } from 'react';
import './todo.css';

export const TodoAppp =() => {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([]) 

    const addTasks = () => {
        if (input.trim() !== ""){
            setTasks([...tasks, input]);
        }
    }

    const removeTasks = (index) => {
        const newTask = [...tasks
        ];
        newTask.splice(index,1);
        setTasks(newTask);
    };


// filter, splice (dooooo research)
    


  return (
    <div>
        <h1>To Do :)</h1>
        <input type="text" placeholder='add task' onChange={(t) => setInput(t.target.value)}/>
        <button className='button' onClick={addTasks}>Add</button> <br />  <br />

        {tasks.map((data, index) => (
            <div>
                <input type="checkbox" />{data}<button className='delete' onClick={() => removeTasks(index)}> x </button>
                <br />
                <br />
            </div>
        ))}
    </div>
  );
};
