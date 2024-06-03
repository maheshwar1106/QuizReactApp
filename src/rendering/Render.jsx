import React from "react";
import QuestionHeadRendering from "./QuestionHeadRendering";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Render = ({ tasks }) => {
  return (
    <div>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task, index) => (
          <QuestionHeadRendering
            key={task.id}
            id={task.id}
            index={index}
            title={task}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Render;
