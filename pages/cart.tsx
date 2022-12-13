import { NextSeo } from "next-seo";
import cartIcon from "public/images/cart-empty-icon.png";
import Cart from "../components/cart/Cart";

const CartContainer = () => {
  return (
    <div className="container mx-auto">
      <NextSeo
        title="Giỏ hàng"
        description="Giỏ hàng của bạn"
        canonical="https://hanoi-garden.vercel.app/cart"
        openGraph={{
          url: "https://hanoi-garden.vercel.app/cart",
          title: "Giỏ hàng",
          description: "Giỏ hàng của bạn",
          images: [
            {
              url: cartIcon.src,
              width: 128,
              height: 128,
              alt: "Giỏ hàng",
              type: "image/png",
            },
          ],
          siteName: "Hà Nội Garden",
        }}
      />
      <Cart />
    </div>
  );
};

export default CartContainer;
