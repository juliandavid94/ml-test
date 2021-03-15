/**
  * @import classes
*/
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import classes from './navbar.module.scss';

/**
  * @desc Show the search box, linktohandler redirects to the expected page, keypresshandler activates the Enter method of the keyboard 
  * @return object view
*/
const NavbarSearch = ({textProduct,setTextProduct}) => {
    let history = useHistory();
    
    // redirects to the expected page
    const linktohandler = (evt) =>{
        evt.preventDefault();
        if(textProduct){        
            history.push({
                pathname: '/items',
                search:`search=${textProduct}`
            })
        }
    }

    // activates the Enter method of the keyboard
    const keypresshandler = (evt) => {
        if (evt.key === 'Enter') {
            linktohandler(evt)
        }
    }
    
    return (
        <>
            <form className={classes.form} noValidate>
                <input 
                    className={classes.input} placeholder="Nunca dejes de buscar"
                    type="text" value={textProduct} onChange={event => setTextProduct(event.target.value)}
                    onKeyPress={(evt) => keypresshandler(evt)} />
                <button className={classes.btn_search} onClick={(evt) =>linktohandler(evt)} >
                    <BsSearch size="20" />
                </button>
            </form>
        </>
    )
}

//add proptypes

export default NavbarSearch;