import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css'

function Product({id, title, image, price, rating}) {
const [{basket}, dispatch] = useStateValue(); //dispatch will push to the datalayer, state(basket) will receive datalayer 
    //useStateValue will do two things one push the state to the datalayer and brings from the data layer. 
    // console.log("this is the basket", basket);            //type is this the basket, it's pushed to the data layer while you're in the data layer, you're be able to see the datalayer
    const addToBasket = () => {

  // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          });
        };

    
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>

            <div className='product__rating'>
                {Array (rating)
                .fill()
                .map(() => (
                    <p>🌟</p>
                ))}          
            </div>
            </div>

            <img src={image} alt='' 
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
  );
}

export default Product;