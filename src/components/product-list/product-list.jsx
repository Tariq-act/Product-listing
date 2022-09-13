import React, { useContext } from 'react';
import ProductCard from '../product-card/product.card.component';
import { GlobalContext } from '../../context/contextApi';

import './product-list.styles.scss';

const ProductList = () => {
  const { list } = useContext(GlobalContext);
  return (
    <div className='card-list'>
      <ul>
        <li>Image</li>
        <li>Name</li>
        <li>Description</li>
        <li>Stock</li>
        <li>price</li>
        <li>Buy</li>
      </ul>
      {list.map((data) => (
        <ProductCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProductList;
