import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { navigate, useNavigate } from 'react-router-dom';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    const navigate = useNavigate();
    const getBasketTotal = (basket) => 
        basket?.reduce((amount, item) => item.price + amount, 0); //amount is the accumulator, it starts from zero and add each item's price and keep it on in the about
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <div>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </div>

            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
      <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
    </div>  
  );
}

export default Subtotal;


//exported to checkout component
