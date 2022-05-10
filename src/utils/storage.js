import { createContext, useState } from "react";

const initialState = {
  items: [],
  addItem: () => {},
};

export const StorageContext = createContext(initialState);

export const StorageProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <StorageContext.Provider
      value={{
        items,
        addItem,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
