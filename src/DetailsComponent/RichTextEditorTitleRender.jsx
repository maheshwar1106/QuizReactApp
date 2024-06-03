import { Editor, EditorState, convertFromRaw } from "draft-js";
import React from "react";

const RichTextEditorTitleRender = ({ quizHeader }) => {
  const contentState = convertFromRaw(JSON.parse(quizHeader.title));
  const editorState = EditorState.createWithContent(contentState);

  return (
    <div>
      <Editor editorState={editorState} readOnly={true} />
    </div>
  );
};

export default RichTextEditorTitleRender;
