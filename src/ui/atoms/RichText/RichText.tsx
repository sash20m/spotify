import * as React from 'react';
import { EditorState } from 'draft-js';
import { Editor, EditorState as EditorStateType } from 'react-draft-wysiwyg';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './RichText.scss';

interface Props {
  initialValue?: string;
  onChange: (value: string) => void;
}

export const RichText: React.FC<Props> = ({ initialValue, onChange }) => {
  const [value, setValue] = React.useState(EditorState.createEmpty());

  React.useEffect(() => {
    if (initialValue) {
      setValue(EditorState.createWithContent(convertFromHTML({})(initialValue)));
    }
  }, [initialValue]);

  const onChangeHandler = (editorState: EditorStateType): void => {
    setValue(editorState);

    onChange(convertToHTML({})(editorState.getCurrentContent()));
  };

  return (
    <Editor
      editorState={value}
      toolbarClassName="zh-rich-text-toobar"
      wrapperClassName="zh-rich-text-wrapper"
      editorClassName="zh-rich-text"
      onEditorStateChange={onChangeHandler}
    />
  );
};
