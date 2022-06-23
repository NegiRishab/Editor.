import React from 'react'
import Editor from "./Editor";
import classes from './Editcontainer.module.css'

export default function Editorcontainer() {
  return (
    <div className={classes.editBox}>
      <Editor/>
    </div>
  )
}
