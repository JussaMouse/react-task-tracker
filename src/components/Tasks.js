import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* this line loops through the tasks */}
      {tasks.map((task, index) => (
        /* this line outputs the
            component and passes the task in as a prop */
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
