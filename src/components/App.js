import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };
  const removeTask = (taskText) => {
    console.log("DELETING");
    setTaskList(taskList.filter((task) => task.text !== taskText));
  };
  const filteredTasks = taskList.filter((task) => {
    if (categoryFilter === "All") {
      return true;
    }
    return task.category === categoryFilter;
  });
  console.log(filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setCategoryFilter={setCategoryFilter}
      />
      <NewTaskForm categories={CATEGORIES} addTask={addTask} />
      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
