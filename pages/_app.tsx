import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import store from "../store/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
