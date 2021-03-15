/**
  * @desc ordened array 
  * @param products $products - products received from endpoint
  * @return array
*/
const products = (products) => {
    return products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        address: product.address.state_name,
      }
    });
}

/**
  * @desc breadcrumbs
  * @param categories $categories - filter the most relevant category according to the search 
  * @return object
*/
const categories = (categories) => {
    return categories.length > 0 ?
        categories.find((categoria) => categoria.id === 'category').values[0].path_from_root.map((textCategory) => textCategory.name) :
        null;
}

/**
  * @desc ordened array 
  * @param product $product - product received from endpoint
  * @param description $description - description received from product endpoint
  * @return array
*/
const productsId = (product, description) => {
    return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description: description.plain_text,
        features: product.attributes,
      }
}

export default {products, categories, productsId}