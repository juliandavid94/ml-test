/**
  * @import axios
  * @import transform
  * @desc transform - receiving an array and returns an ordered array
*/
import axios from 'axios';
import transform from './helpers';

/**
  * @desc consumes endpoint
  * @param query $query - search performed
  * @return array
*/
export const channelProductText = (query) => {
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then((response) => {
        const categories = transform.categories(response.data.filters); 
        const items = transform.products(response.data.results.slice(0, 4));
        return {categories, items};
    }).catch((error) => {
        throw error;
    });
}

/**
  * @desc consumes endpoint
  * @param id $id - id product select
  * @return array
*/
export const channelProductId = (id) =>{
    return Promise.all([
        axios.get(`https://api.mercadolibre.com/items/${id}`),
        axios.get(`https://api.mercadolibre.com/items/${id}/description`)
    ]).then(([response, description]) => {
        const item = transform.productsId(response.data, description.data);
        return {item};
    }).catch((error) => {
        throw error;
    });
}
