function Task({ task, completeTask }) {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <span>{task.text}</span>
        <button onClick={() => completeTask(task.id)}>✔️</button>
      </div>
    );
  }
  
  export default Task;
  