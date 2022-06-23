import React from 'react'
import classes from './Left.module.css'
export default function Left() {
  return (
    <div className={classes.maincontiner} >
      <div className={classes.contentContainer}>
        <div className={classes.child}>
        <i class="fas fa-th-large fa-2x"></i>
          <p>Dashboard</p>
          </div>
        <div className={classes.child}>
        <i class="fas fa-user fa-2x"></i>
          <p>Profile</p>
          </div>
      </div>
    </div>
  )
}
