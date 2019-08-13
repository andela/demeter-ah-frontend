import React, { Fragment, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CheckList from '@editorjs/checklist';

const Editor = ({ isOpen, articleBody }) => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    setEditor(new EditorJS({
      holder: 'codex-editor',
      placeholder: 'Write your ideas',
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link', 'bold', 'italic'],
          config: {
            placeholder: 'Header'
          },
          shortcut: 'CMD+SHIFT+H'
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        checkList: {
          class: CheckList,
          inlineToolbar: true
        }
      },
      data: {}
    }));
  }, []);
  const save = async () => {
    try {
      await editor.isReady;
      const body = await editor.save();
      articleBody({ body });
    } catch (error) {
      console.log('errr', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      save();
    }
  }, [isOpen]);

  return (
    <Fragment>
      <div id="codex-editor" className="codex-editor" />
    </Fragment>
  );
};

export default Editor;
