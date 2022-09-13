import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { GlobalContext } from '../../context/contextApi';

import './checkout.page.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(GlobalContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-content'>
        <NavLink to={'/'}>
          <button>
            <i className='fa-solid fa-circle-arrow-left'></i> Back to Products
          </button>
        </NavLink>
        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>SubTotal</li>
        </ul>

        {cartItems.map((item) => (
          <CheckoutItem key={item.id} data={item} />
        ))}
      </div>
      <div className='cart-total'>
        <div className='sub-total'>
          <h3>Subtotal</h3>
          <div className='sub-price'>{cartTotal}</div>
        </div>
        <div className='total'>
          <h2>Total</h2>
          <div className='price'>{cartTotal}</div>
        </div>

        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
