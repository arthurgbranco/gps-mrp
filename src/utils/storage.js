import { createContext, useEffect, useState } from "react";

const initialState = {
  items: [],
  addItem: () => {},
};

export const StorageContext = createContext(initialState);

export const StorageProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("items");

    if (items) {
      setItems(JSON.parse(items));
    } else {
      localStorage.setItem("items", JSON.stringify([]));
    }
  }, []);

  const addItem = (item) => {
    const newValue = [...items, item];

    setItems(newValue);
    saveData(newValue);
  };

  const saveData = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
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
