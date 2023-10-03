import React from 'react'

const Task = (props) => {
  return (
    <div className='task'
    style={{ backgroundColor : props.completed ? "green" : "white" }}> 
        {props.taskName}
        <button onClick={() => props.completeTask(props.id)}
        className=' border border-slate-600 rounded-md '> Completed </button>
        <button onClick={() => props.deleteTask(props.id)}
        className=' border border-slate-600 rounded bg-red-500 text-white '> X </button>
    </div>
  )
}

export default Task