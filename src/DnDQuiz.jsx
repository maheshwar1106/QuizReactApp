import React from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import DragOptionArr from "./DragOptionArr";
import { arrayMove } from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const DnDQuiz = ({ deleteOption, optionArr, setOptionArr }) => {
  const getQuesPos = (id) =>
    optionArr.findIndex((quesObj) => quesObj.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setOptionArr((options) => {
      const originalPos = getQuesPos(active.id);
      const newPos = getQuesPos(over.id);
      return arrayMove(options, originalPos, newPos);
    });
  };

  return (
    <div>
      <DndContext
        modifiers={[restrictToParentElement]}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <DragOptionArr {...{ optionArr, deleteOption }} />
      </DndContext>
    </div>
  );
};

export default DnDQuiz;
