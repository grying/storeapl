
import Footer from "./components/footer/footer";
import Home from "./components/home/Home";
import Favorite from "./components/favorite/Favorites";
import Basket from "./components/basket/Basket";
import Service from "./components/service/Service";
import Registr from "./components/registr/Registr";

import "./sass/App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import {store} from './redux/store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorite  />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/service" element={<Service />} />
              <Route path="/basket/registr" element={<Registr />} />
            </Routes>
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
