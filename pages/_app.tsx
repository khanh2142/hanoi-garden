import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollTop from "../components/layout/ScrollTop";
import store from "../store/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <Header />
        <Component {...pageProps} />
        <ScrollTop />
        <Footer />

        <ToastContainer autoClose={1000} />
      </div>
    </Provider>
  );
}
