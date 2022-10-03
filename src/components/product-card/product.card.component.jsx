import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { GlobalContext } from '../../context/contextApi';

import './product-card.styles.scss';

const ProductCard = ({ data }) => {
  const { title, image, description, price, stock, quantity } = data;
  const { addCartItem, cartItems, increaseQuantity, decreaseQuantity } =
    useContext(GlobalContext);

  let check = cartItems.find((item) => item.id === data.id) ? true : false;

  return (
    <div>
      <div className='card-container'>
        <div className='card'>
          <div className='image'>
            <img src={image} alt='' />
          </div>
          <div className='title'>{title}</div>
          <div className='description'>{description}</div>
          <div className='stock'>{stock ? 'In stock' : 'Out of stock'}</div>
          <div className='price'>${price}</div>
          <div className='buy'>
            <div className='quantity'>
              <div className='arrow' onClick={() => decreaseQuantity(data)}>
                &#10094;
              </div>
              <div className='value'>{quantity}</div>
              <div className='arrow' onClick={() => increaseQuantity(data)}>
                &#10095;
              </div>
            </div>
            <div className='btn-add'>
              <button onClick={() => addCartItem(cartItems, data)}>
                <i className='fa-solid fa-cart-shopping'></i>
              </button>
            </div>
            <input type='checkbox' defaultChecked={check} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
