import { useState } from "react";
import "../DragNDrop/DnD.css";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { Column } from "./Column";
import { arrayMove } from "@dnd-kit/sortable";

const DnD = () => {
  // const [tasks, setTasks] = useState([
  //   { id: 1, title: "Add tests to homepage" },
  //   { id: 2, title: "Fix styling in about section" },
  //   { id: 3, title: "Learn how to centre a div" },
  // ]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      question: "What is the name of the Prime Minister of India ?",
      responseType: "checkBox",
      options: [
        { id: 1, value: "Narendra Modi" },
        { id: 2, value: "Rahul Gandhi" },
        { id: 3, value: "Mamata Banerjee" },
        { id: 4, value: "Aravind Kejriwal" },
      ],
      isRequired: true,
    },
    {
      id: 2,
      question: "Where is Oddanchatram situated ?",
      responseType: "radioOption",
      options: [
        { id: 1, value: "Dindigul" },
        { id: 2, value: "Coimbatore" },
        { id: 3, value: "Salem" },
      ],
      isRequired: false,
    },
    {
      id: 3,
      question: "Describe yourself ?",
      responseType: "singleTextArea",
      options: [],
      isRequired: true,
    },
  ]);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id == over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      console.log(
        "<------------setting new positions-------------->",
        originalPos,
        newPos
      );
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default DnD;
