import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../context/contextApi';

import './filter.styles.scss';

const Filter = () => {
  const {
    category,
    handleCategory,
    inputSearch,
    handleSearch,
    price,
    handlePrice,
    resetButton,
  } = useContext(GlobalContext);
  return (
    <>
      <div className='filter-container'>
        <div className='select-filter'>
          <select
            name='category'
            id='category'
            value={category}
            onChange={handleCategory}
          >
            <option value=''>select category</option>
            <option value={`men's clothing`}>Men Clothing</option>
            <option value={`women's clothing`}>Women Clothing</option>
            <option value={`jewelery`}>Jewelery</option>
            <option value={`electronics`}>Eletronics</option>
          </select>

          <select name='size' id='size' value={price} onChange={handlePrice}>
            <option value=''>price</option>
            <option value='50'>$50</option>
            <option value='100'>$100</option>
            <option value='200'>$200</option>
            <option value='500'>$500</option>
            <option value='1000'>$1000</option>
          </select>

          <button className='btn-reset' onClick={() => resetButton()}>
            <i className='fa-sharp fa-solid fa-arrow-rotate-left'></i> reset
          </button>
        </div>
        <div className='search-filter'>
          <div className='search'>
            <label htmlFor='search'>Search: </label>
            <input
              type='search'
              value={inputSearch}
              onChange={handleSearch}
              placeholder='Search...'
            />
          </div>

          <div className='addCart'>
            <NavLink to={'/check-out'}>
              <button>Add Cart</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
