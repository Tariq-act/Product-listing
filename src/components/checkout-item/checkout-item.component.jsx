import React, { useContext } from 'react';

import { GlobalContext } from '../../context/contextApi';

import './checkout-item.component.scss';

const CheckoutItem = ({ data }) => {
  const { image, title, price, quantity } = data;

  const { removeCartItem, cartItems, setCartItems } = useContext(GlobalContext);

  const increase = (data) => {
    let allCartList = [...cartItems];
    let index = allCartList.indexOf(data);
    allCartList[index].quantity++;

    setCartItems(allCartList);
  };
  const decrease = (data) => {
    let allCartList = [...cartItems];
    let index = allCartList.indexOf(data);
    if (allCartList[index].quantity > 1) allCartList[index].quantity--;

    setCartItems(allCartList);
  };

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
      <div className='quantity'>
        <div className='arrow' onClick={() => decrease(data)}>
          &#10094;
        </div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={() => increase(data)}>
          &#10095;
        </div>
      </div>
      <div className='subtotal'>${(quantity * price).toFixed(2)}</div>
    </div>
  );
};

export default CheckoutItem;
