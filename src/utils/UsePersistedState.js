import { useEffect, useState } from 'react';

function UsePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue =
      typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
export default UsePersistedState;
