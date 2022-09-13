import React, { useContext } from 'react';

import { GlobalContext } from '../../context/contextApi';

import './checkout-item.component.scss';

const CheckoutItem = ({ data }) => {
  const { image, title, price, quantity } = data;

  const { removeCartItem, cartItems } = useContext(GlobalContext);
  return (
    <div className='checkout-item'>
      <div className='product'>
        <button onClick={() => removeCartItem(cartItems, data)}>
          <i className='fa-solid fa-xmark'></i>
        </button>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='title'>{title}</div>
      </div>

      <div className='price'>${price}</div>
      <div className='quantity'>{quantity}</div>
      <div className='subtotal'>${quantity * price}</div>
    </div>
  );
};

export default CheckoutItem;
