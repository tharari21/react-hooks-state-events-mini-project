import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Code");
  const handleDropdownChange = (event) => {
    setTaskCategory(event.target.value);
  };
  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: taskText,
      category: taskCategory,
    };
    addTask(newTask);
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleDropdownChange}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            if (category !== "All") {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            }
            return null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
