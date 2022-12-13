import { NextSeo } from "next-seo";
import ProductContainer from "../components/product/ProductContainer";

import productIcon from "public/images/wallpaper.png";

const Product = () => {
  return (
    <div className="container mx-auto">
      <NextSeo
        title="Danh sách sản phẩm"
        description="Danh sách sản phẩm"
        canonical="https://hanoi-garden.vercel.app/product"
        openGraph={{
          url: "https://hanoi-garden.vercel.app/product",
          title: "Danh sách sản phẩm",
          description: "Danh sách sản phẩm",
          images: [
            {
              url: productIcon.src,
              width: 128,
              height: 128,
              alt: "Danh sách sản phẩm",
              type: "image/png",
            },
          ],
          siteName: "Hà Nội Garden",
        }}
      />

      <ProductContainer />
    </div>
  );
};

export default Product;
