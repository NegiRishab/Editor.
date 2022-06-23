import React from "react";
import ReactDOM from "react-dom";
import ReactQuill, { Quill } from "react-quill";

import toolbaro from "../toolbaro";

import "react-quill/dist/quill.bubble.css";
import "./Editor.css";

const BubbleTheme = Quill.import("themes/bubble");

class ExtendBubbleTheme extends BubbleTheme {
  constructor(quill, options) {
    super(quill, options);

    quill.on("selection-change", (range) => {
      if (range) {
        quill.theme.tooltip.show();
        quill.theme.tooltip.position(quill.getBounds(range));
      }
    });
  }
}

Quill.register("themes/bubble", ExtendBubbleTheme);

export default class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <ReactQuill
          theme="bubble"
          placeholder="This is the first instance of the editor"
          modules={{ toolbar: toolbaro }}
          
        ></ReactQuill>
      </div>
    );
  }
}
