import React from "react";
import Task from "./Task";
function TaskList({ tasks, removeTask }) {
  const taskList = tasks.map((task, index) => (
    <Task key={index} task={task} removeTask={removeTask} />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
