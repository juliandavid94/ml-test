/**
  * @import classes
*/
import React from 'react';
import classes from './spinner.module.scss';

/**
  * @desc loader application 
  * @return object view
*/
const Spinner = () => {

    return (
        <div className={classes.Loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}


export default Spinner;