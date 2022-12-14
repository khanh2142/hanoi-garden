import { NextSeo } from "next-seo";
import ProductContainer from "../components/product/ProductContainer";

import Head from "next/head";
import productIcon from "public/images/wallpaper.png";

const Product = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <meta
          name="keywords"
          content="Hà Nội Garden, Hà Nội Garden Sản phẩm, Sản phẩm, Products , product"
        />
      </Head>
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
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Nguyễn Bá Khánh",
          },
        ]}
      />

      <ProductContainer />
    </div>
  );
};

export default Product;
