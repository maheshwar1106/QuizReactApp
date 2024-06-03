import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "./Task";

export const Column = ({ tasks }) => {
  console.log(tasks);
  return (
    <div className="column">
      <SortableContext items={tasks} startegy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} title={task} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};
