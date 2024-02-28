import React, { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeDesktop from "./components/HomeDesktop/HomeDesktop";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
import { FirstContentAlbums } from "./components/Content/FirstContent";

export const MyContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < FirstContentAlbums.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

function App() {
  const [carts, setCarts] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCarts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCarts((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const AddCrt = (itemId, quantity) => {
    setCarts((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
  };

  const idEach = FirstContentAlbums.reduce((total, product) => {
    if (carts[product.id] !== 0) {
      return total + carts[product.id];
    }
    return total;
  }, 0);

  const contextValue = { carts, addToCart, removeFromCart, idEach, AddCrt };
  return (
    <MyContext.Provider
      // value={{ carts: carts, setCarts: setCarts }}
      value={contextValue}
    >
      <Header />
      <Outlet />
      {/* <HomeDesktop /> */}
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
