import React, { Fragment, useEffect, } from 'react';
import { connect } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CheckList from '@editorjs/checklist';
import * as actions from '../../../store/actions/articles';

const editor = new EditorJS({
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
});

const Editor = ({ isOpen, articleBody }) => {
  const save = async () => {
    try {
      await editor.isReady;
      const data = await editor.save();
      articleBody(data);
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

const mapStateToProps = state => ({
  isOpen: state.articles.openPublishModal
});

const mapDispatchToProps = {
  articleBody: actions.setArticleBody
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
