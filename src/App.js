import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if ( task.id === id) {
          return { ...task, completed: true};
        } else {
          return task;
        }
      })
    ); 
  };

  return (
    <div className="App">
      <h1 className=" text-blue-400 font-bold bg-black ">Make a task to compelete your goal!</h1>
      
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask} className=' border rounded-md border-blue-500 font-bold ' >Add Task</button>
      </div>

      <div className='list'>
        <h4 className=" text-blue-400 font-bold bg-black ">Here's a todolist for today!</h4>
        {todoList.map((task) =>
          {return (
          <Task 
            taskName={task.taskName} 
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
