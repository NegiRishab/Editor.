import React from "react";
import Card from "./Card";

import Editorcontainer from "./Editor/Editorcontainer";
import classes from './Right.module.css'
export default function Right() {
  return (
    <div className={classes.mainContainer}>
      <div>
        <p>Summary</p>
      </div>
      <Card/>
      <Editorcontainer/>
    </div>
  );
}
