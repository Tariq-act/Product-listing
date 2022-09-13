import { createContext, useState, useEffect } from 'react';

import data from '../dummyData.json';

const intialState = {
  list: [],
  cartItems: [],
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) => {
  const [list, setList] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [check, setCheck] = useState(false);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      return cartItems.map(
        (cartItem) =>
          cartItem.id === productToAdd.id &&
          setCartItems([{ ...cartItem, quantity: cartItem.quantity + 1 }])
      );
    }

    return setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
  };

  const removeCartItem = (cartItems, cartItemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItemToRemove.id));
  };

  // Total
  useEffect(() => {
    const total = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity + cartItem.price,
      0
    );

    setCartTotal(total.toFixed(2));
  }, [cartTotal, cartItems]);

  console.log(cartTotal);

  // eslint-disable-next-line
  const applyFilter = () => {
    let filteredList = data;

    if (inputSearch) {
      filteredList = filteredList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    if (category) {
      filteredList = filteredList.filter((item) => item.category === category);
    }

    if (price) {
      filteredList = filteredList.filter((item) => item.price <= Number(price));
    }

    setList(filteredList);
  };

  const handleCheck = () => {
    setCheck((prev) => !prev);
  };

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  return (
    <GlobalContext.Provider
      value={{
        list,
        category,
        inputSearch,
        check,
        price,
        cartItems,
        cartTotal,
        handlePrice,
        handleCategory,
        handleSearch,
        handleCheck,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
