import React from 'react';

function TaskList({ tasks, selectedCategory, onDeleteTask }) {
  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <div key={task.id} className="task">
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button className="delete" onClick={() => onDeleteTask(task.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;