import { NextSeo } from "next-seo";
import Advertise from "./components/Advertise";
import Category from "./components/Category";
import Comment from "./components/Comment";
import FeatureProduct from "./components/FeatureProduct";
import ListProduct from "./components/ListProduct";
import Recommend from "./components/Recommend";

import wallpaper from "../../public/images/wallpaper.png";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Shop hoa tươi Hà Nội Garden: Đặt Hoa Online Giao Tận Nơi ..."
        description="Shop hoa tươi Hà Nội Garden cung cấp dịch vụ đặt hoa online giao tận nơi khắp các tỉnh thành Giao hàng MIỄN PHÍ. Shop hoa tươi uy tín tại Việt Nam..."
        canonical="https://hanoi-garden.vercel.app"
        openGraph={{
          url: "https://hanoi-garden.vercel.app",
          title: "Ha Noi Garden",
          description: "Vườn hoa Hà Nội",
          images: [
            {
              url: wallpaper.src,
              width: 250,
              height: 250,
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
      <Advertise />
      <FeatureProduct />
      <Category />
      <ListProduct />
      <Recommend />
      <Comment />
    </>
  );
};

export default Home;
