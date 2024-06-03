import { Editor, EditorState, convertFromRaw } from "draft-js";
import React from "react";

const RichTextEditorRender = ({ quizHeader }) => {
  const contentState = convertFromRaw(JSON.parse(quizHeader.syllabusDesc));
  const editorState = EditorState.createWithContent(contentState);

  return (
    <div>
      <Editor editorState={editorState} readOnly={true} />
    </div>
  );
};

export default RichTextEditorRender;
