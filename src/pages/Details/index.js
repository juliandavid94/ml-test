/**
  * @import Spinner
  * @import Breadcrumbs
  * @import channelProductId
  * @desc channelProductId - allows communication with endpoints
*/
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useParams } from 'react-router-dom';
import { channelProductId } from '../../services/channel';
import Spinner from '../../components/Spinner';
import classes from './details.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs';

/**
  * @desc consumes the endpoint of the product details query, traverses the expected array and returns an object with the specific data view of the product
  * @return object view
*/
const DetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false);
    const [categories] = useState([]);
    
    useEffect(()=>{
        setLoading(true);
        channelProductId(id).then(({item}) => {
            setProduct(item);
        }).catch().finally(() => setLoading(false));;
    },[id]);

    if (loading) return <Spinner /> ;

    return (
        <>
        {   categories ? <Breadcrumbs categories={categories} />: null  }
        
        <div className={classes.card}>
            <div className={classes.box_flex}>
                <div className={classes.img}>
                    <img src={product.picture} alt={product.title} />
                    <p className={classes.description}>Descripción del Producto</p>
                    <p className={classes.text_description}>{product.description}</p>
                    <ul className={classes.columns_feature}>
                        {
                            product.features ? product.features.map((feature, i)=> <li key={i}>{feature.name} : {feature.value_name}</li> ): null
                        }
                    </ul>
                </div>
                <div className={classes.purchase}>
                    <small>{product.condition ? 'Nuevo': 'Usado'} - {product.sold_quantity} vendidos</small>
                    <p className={classes.title}>{product.title}</p>
                    {product.price  ? <p>
                        <CurrencyFormat className={classes.price} value={product.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$ '}/>
                    </p> : null}
                    <button className={classes.checkout_button}>Comprar</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetailsPage