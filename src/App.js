import React from "react";
import Left from "./components/Left/Left";
import classes from './App.module.css'
import Right from "./components/Right/Right";
export default function App() {
  return (
   <div className={classes.firstContainer}>
    <Left/>
    <Right/>
   </div>
  );
}
