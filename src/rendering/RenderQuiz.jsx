import React, { useContext } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Render from "./Render";
import { reorderQuiz } from "../features/quiz/QuizSetterSlice";
import { useDispatch } from "react-redux";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { GlobalContext } from "../GlobalProvider";

const RenderQuiz = () => {
  const dispatch = useDispatch();
  const { quizQuestions } = useContext(GlobalContext);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldPos = quizQuestions.findIndex(
        (quesObj) => quesObj.id === active.id
      );
      const newPos = quizQuestions.findIndex(
        (quesObj) => quesObj.id === over.id
      );
      dispatch(reorderQuiz(arrayMove(quizQuestions, oldPos, newPos)));
    }
  };

  return (
    <div>
      <DndContext
        modifiers={[restrictToParentElement]}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Render tasks={quizQuestions} />
      </DndContext>
    </div>
  );
};

export default RenderQuiz;
