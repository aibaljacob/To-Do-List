import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>📝 My To-Do List</h2>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>Add</button>
        </div>

        <ul style={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.listItem}>
              <span
                onClick={() => toggleComplete(task.id)}
                style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#aaa' : '#333',
                }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Updated styles for centering and theme
const styles = {  
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: "200vh",
    backgroundColor: '#2E3440', // dark background
  },
  container: {
    width: '400px',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    backgroundColor: '#ECEFF4', // light container
  },
  title: {
    textAlign: 'center',
    color: '#5E81AC',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px'
  },
  input: {
    flex: '1',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D8DEE9',
    backgroundColor: '#FFF',
    color: '#2E3440',
  },
  addButton: {
    marginLeft: '10px',
    padding: '12px 20px',
    backgroundColor: '#A3BE8C', // soft green
    color: '#FFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  list: {
    listStyle: 'none',
    padding: '0'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '12px',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
  taskText: {
    flex: '1',
    fontSize: '16px',
    cursor: 'pointer'
  },
  deleteButton: {
    backgroundColor: '#BF616A', // soft red
    color: '#FFF',
    border: 'none',
    borderRadius: '8px',
    padding: '6px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

export default TodoApp;
