import React from "react";
import classes from "./Card.module.css";
export default function Card() {
  return (
    <div className={classes.maincontaier}>
      <div>
        <i class="fas fa-camera fa-3x"></i>
      </div>
      <div>
        <p>Upload a Cover image</p>
      </div>
      <div>
        <button className={classes.button}>Choose a File</button>
      </div>
    </div>
  );
}
