import React, { useContext } from 'react';

import { GlobalContext } from '../../context/contextApi';

import './product-card.styles.scss';

const ProductCard = ({ data }) => {
  const { title, image, description, price, stock } = data;

  const { addCartItem, cartItems } = useContext(GlobalContext);

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
            <input type='number' className='number-input' defaultValue={'1'} />
            <div className='btn-add'>
              <button onClick={() => addCartItem(cartItems, data)}>
                <i className='fa-solid fa-cart-shopping'></i>
              </button>
            </div>
            {/* <input type='checkbox' checked={check} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
