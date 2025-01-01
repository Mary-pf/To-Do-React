import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FilterButton from "./FilterButtons";

function TaskList({ tasks, completeTask, deleteTask, editTask }) {
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setNewText(task.text);
  };

  const handleSave = (id) => {
    editTask(id, newText);
    setEditId(null);
  };

  // فیلتر وضعیت
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // 'all'
  });

  return (
    <div>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
            aria-live="polite"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
              aria-label="تکمیل وظیفه"
            />
            {editId === task.id ? (
              <input
                className="newText"
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  marginLeft: "2rem",
                }}
                aria-label={task.completed ? "تکمیل شده" : "در انتظار"}
              >
                {task.text}
              </span>
            )}
            <div style={{ display: "inline-flex", gap: "1px" }}>
              <button
                onClick={() => completeTask(task.id)}
                aria-label="تغییر وضعیت"
              >
                {task.completed ? "بازگشایی" : "تکمیل"}
              </button>
              {/* ویرایش */}
              {editId === task.id ? (
                <button
                  className="save-btn"
                  onClick={() => handleSave(task.id)}
                >
                  ✔️
                </button>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(task)}
                  disabled={task.completed}
                >
                  ✏️
                </button>
              )}
              {/* حذف */}
              <button
                onClick={() => deleteTask(task.id)}
                aria-label="حذف وظیفه"
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: "#363b45" }} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FilterButton onFilterChange={setFilter} />
    </div>
  );
}

export default TaskList;
