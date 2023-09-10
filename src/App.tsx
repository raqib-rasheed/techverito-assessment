import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer, ScrollToTop } from "./components";

import {
  Home,
  Error,
  Shipping,
  SingleProduct,
  Checkout,
  Products,
  Cart,
  SuccessfulPayment,
} from "./pages";

function App() {
  return (
    <Routes>

        <>
          <Route path="/" element={<Home />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/successful_payment"
            element={<SuccessfulPayment />}
          />
          <Route path="*" element={<Error />}></Route>
        </>
    </Routes>
  );
}

export default App;

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};
