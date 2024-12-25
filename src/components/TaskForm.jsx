import { useState } from 'react';

function TaskForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(e);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="taskInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="نام کار جدید را وارد کنید..."
        required
      />
      <button type="submit">افزودن</button>
    </form>
  );
}

export default TaskForm;
