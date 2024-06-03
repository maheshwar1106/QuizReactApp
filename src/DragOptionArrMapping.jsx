import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DragOptionArrMapping = ({ id, option, deleteOption }) => {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({
      id,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div key={id} style={style} ref={setNodeRef}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          {...listeners}
          {...attributes}
          style={{
            cursor: "pointer",
            height: "38px",
            marginRight: "10px",
          }}
        >
          <div style={{ height: "10px", fontSize: "25px", color: "grey" }}>
            ...
          </div>
          <div style={{ height: "10px", color: "grey", fontSize: "25px" }}>
            ...
          </div>
        </div>
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          <label id="radioOptionLabel" htmlFor="dropBox">
            Option
          </label>
          <div id="optionRender">
            {" "}
            <p>{option.value}</p>
            <button
              key={id}
              type="button"
              onClick={() => deleteOption(option.id)}
              style={{ cursor: "pointer" }}
            >
              X
            </button>{" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragOptionArrMapping;
