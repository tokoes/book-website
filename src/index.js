import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomeDesktop from "./components/HomeDesktop/HomeDesktop";
import NonHeader from "./NonHeader/NonHeader";
import Cart from "./components/Cart/Cart";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomeDesktop />,
      },
      {
        path: "NonHeader/:id",
        element: <NonHeader />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },

      {
        path: "ori",
        element: <div className="lol">gamarjoba me var ori</div>,
      },
      {
        path: "sami",
        element: <div className="lol">gamarjoba me var sami</div>,
      },
      {
        path: "otxi",
        element: <div className="lol">gamarjoba me var otxi</div>,
      },
      {
        path: "xuti",
        element: <div className="lol">gamarjoba me var xuti</div>,
      },
      {
        path: "eqvsi",
        element: <div className="lol">gamarjoba me var eqvsi</div>,
      },
      {
        path: "shvidi",
        element: <div className="lol">gamarjoba me var shvidi</div>,
      },
      {
        path: "rva",
        element: <div className="lol">gamarjoba me var rva</div>,
      },
      {
        path: "cxra",
        element: <div className="lol">gamarjoba me var cxra</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
