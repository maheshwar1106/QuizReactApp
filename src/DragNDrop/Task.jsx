import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="task"
    >
      {/* <input type="checkbox" className="checkbox" />
      {title} */}
      <div>{title.id}</div>
      <div>{title.question}</div>
      <div>{title.responseType}</div>
      <div>{title.options.value}</div>
      <div>{title.isRequired}</div>
    </div>
  );
};

export default Task;
