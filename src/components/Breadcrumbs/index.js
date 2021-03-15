import classes from './breadcrumbs.module.scss';
import React from 'react';

/**
  * @desc defines the breadcrumb according to the received object
  * @params categories 
  * @return string
*/
const Breadcrumbs = ({categories}) => {

    return (
        <p className={classes.breadcrumbs}>
            <a href="/">Inicio &raquo; </a>
            {categories.reduce((prevVal,currVal,ix)=> {
                return (ix+1) !== categories.length ? `${prevVal}${currVal} > `:`${prevVal}${currVal}`;
            }, '')}
        </p>
    )
}

export default Breadcrumbs