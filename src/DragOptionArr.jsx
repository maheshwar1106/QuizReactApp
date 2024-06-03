import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import DragOptionArrMapping from "./DragOptionArrMapping";

const DragOptionArr = ({ optionArr, deleteOption }) => {
  return (
    <div style={{ width: "300px" }}>
      <SortableContext items={optionArr} strategy={verticalListSortingStrategy}>
        {optionArr.length !== 0 &&
          optionArr.map((option, id) => (
            <DragOptionArrMapping
              key={id}
              id={option.id}
              {...{ option, deleteOption }}
            />
          ))}
      </SortableContext>
    </div>
  );
};

export default DragOptionArr;
