import Head from "next/head";
import Cart from "../components/cart/Cart";

const CartContainer = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Giỏ hàng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
    </div>
  );
};

export default CartContainer;
