import type { AppProps } from "next/app";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
