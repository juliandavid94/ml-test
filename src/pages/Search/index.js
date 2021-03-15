/**
  * @import Spinner
  * @import Breadcrumbs
  * @import Item
  * @import channelProductText
  * @desc channelProductText - allows communication with endpoints
*/
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Item from '../../components/Item';
import Spinner from '../../components/Spinner';
import { channelProductText } from '../../services/channel';

/**
  * @desc consumes product query endpoint, traverses the expected array and returns an object with the items at Item Component
  * @param props page properties 
  * @return object
*/
const SearchPage = (props) =>{
    const query = new URLSearchParams(props.location.search).get("search");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        channelProductText(query).then(({categories,items})=>{
            setProducts(items);
            setCategories(categories);
        }).catch().finally(()=> setLoading(false));

    },[query])

    if(loading) return <Spinner />;

    return (
        <>
        {   categories ? <Breadcrumbs categories={categories} />: null  }
        {
            products.length > 0 ? products.map((product,i) => 
            <Item key={i}
                idProduct={product.id} 
                urlImg={product.picture}
                amount={product.price.amount}
                currency={product.price.currency}
                address={product.address}
                title={product.title} />)
            :
            <p>No encontramos ningun resultado</p>
        }
        </>
    )
};

export default SearchPage;