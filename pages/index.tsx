import Head from "next/head";
import Home from "../components/Home";

export default function App() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Ha Noi Garden</title>
        <meta name="description" content="Ha Noi Garden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
