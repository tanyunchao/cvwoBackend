import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState, useEffect } from 'react';

const RichtextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    useEffect(() => {
        console.log(editorState);
    }, [editorState]);

    return (
        <div className="textboxDiv">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
    )
    
}
 
export default RichtextEditor;