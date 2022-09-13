import React from 'react';
import Filter from '../../components/filter/filter.component';
import ProductList from '../../components/product-list/product-list';

const ProductHome = () => {
  return (
    <div>
      <Filter />
      <ProductList />
    </div>
  );
};

export default ProductHome;
