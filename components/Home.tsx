import { NextSeo } from "next-seo";
import Advertise from "./Advertise";
import Category from "./Category";
import Comment from "./Comment";
import FeatureProduct from "./FeatureProduct";
import Footer from "./Footer";
import Header from "./Header";
import ListProduct from "./ListProduct";
import Recommend from "./Recommend";

import wallpaper from "../public/images/wallpaper.png";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Ha Noi Garden"
        description="Vườn hoa Hà Nội"
        canonical="https://hanoi-garden.vercel.app"
        openGraph={{
          url: "https://hanoi-garden.vercel.app",
          title: "Ha Noi Garden",
          description: "Vườn hoa Hà Nội",
          images: [
            {
              url: wallpaper.src,
              width: 300,
              height: 300,
              alt: "Ha Noi Garden",
              type: "image/png",
            },
          ],
          siteName: "Ha Noi Garden",
        }}
        twitter={{
          handle: "@hanoigarden",
          site: "@hanoigarden",
          cardType: "summary_large_image",
        }}
      ></NextSeo>
      <Header />
      <Advertise />
      <FeatureProduct />
      <Category />
      <ListProduct />
      <Recommend />
      <Comment />
      <Footer />
    </>
  );
};

export default Home;
