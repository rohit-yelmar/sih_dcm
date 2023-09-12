import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import NestedList from "@editorjs/nested-list";
import Checklist from "@editorjs/checklist";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";

const DefaultData = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        level: 2,
        text: "Start writing your document here...",
      },
    },
  ],
};

const TextEditor = () => {
  const editorRef = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {},
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        header: Header,
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
      },
      data: DefaultData,
    });
  };

  useEffect(() => {
    if (editorRef.current === null) {
      initEditor();
    }
    return () => {
      editorRef?.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div className="editor" id="editorjs"></div>;
};

export default TextEditor;