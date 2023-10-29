import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

const initialTasks = [
  { id: 1, text: 'Task 1', category: 'Category1' },
  { id: 2, text: 'Task 2', category: 'Category2' },
  
];

const initialCategories = ['All', 'Category1', 'Category2'];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [categories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        selectedCategory={selectedCategory}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
