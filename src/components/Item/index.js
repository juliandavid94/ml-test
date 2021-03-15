/**
  * @import classes
*/
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from './item.module.scss';

/**
  * @desc defines the visual schema of the queried items
  * @params idProduct - product identification 
  * @params urlImg - product image
  * @params amount - product amount
  * @params title - product title
  * @params address - product address
  * @return object view
*/
const Item = ({ idProduct, urlImg, amount, title, address }) => {
    let match = useRouteMatch();

    return (
        <Link className={classes.card} to={{
            pathname: `${match.url}/${idProduct}`
        }}>
            <div className={classes.products_card}>
                <img src={urlImg} alt={title} />
                <div className="mt-4 ml-3">
                    <p><CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></p>
                    <small><strong>{title}</strong></small>
                </div>
                <div className={classes.address}>
                    <small>{address}</small>
                </div>
            </div>
        </Link>
    )
}

export default Item;