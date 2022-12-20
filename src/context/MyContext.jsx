import { createContext, useContext, useState } from 'react';
import P from 'prop-types';

const initialValue = {
  context: {},
  setContext: () => {},
};

export const MyContext = createContext(initialValue);

export function GenericContextProvider({ children }) {
  const [context, setContext] = useState(initialValue.context);

  // useEffect(() => {
  //   const cartStorage = localStorage.getItem('cart')
  //   if (cartStorage) {
  //     setCart(JSON.parse(cartStorage))
  //   }
  // } , [])

  // function getStorage(){
  //   return JSON.parse(localStorage.getItem('cart'))
  // }
  // function setStorage(data) {
  //   localStorage.setItem('cart', JSON.stringify(data))
  //   setCart(getStorage())
  // }

  return (
    <MyContext.Provider value={{ context, setContext }}>
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => useContext(MyContext);

GenericContextProvider.propTypes = {
  children: P.node.isRequired,
};
