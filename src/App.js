import Footer from "./components/footer/footer";
import Home from "./components/home/Home";
import Favorite from "./components/favorite/Favorites";
import Basket from "./components/basket/Basket";
import Service from "./components/service/Service";
import Registr from "./components/registr/Registr";
import clsx from "clsx";

import "./sass/App.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Provider, useDispatch } from "react-redux";

import { store } from "./redux/store";
import { useRef } from "react";
import { toggleBtn } from "./redux/slices/toggle";
import { useState } from "react";
;

function App() {



  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorite />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/service" element={<Service />} />
              <Route path="/service" element={<Service />} />
              <Route
                path="*"
                element={
                  <Link className="button  ab" to="/">
                    перейти на сайт
                  </Link>
                }
              />
            </Routes>

            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
