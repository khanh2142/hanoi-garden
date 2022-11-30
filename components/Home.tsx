import Advertise from "./Advertise";
import Category from "./Category";
import Comment from "./Comment";
import FeatureProduct from "./FeatureProduct";
import Footer from "./Footer";
import Header from "./Header";
import ListProduct from "./ListProduct";
import Recommend from "./Recommend";

const Home = () => {
  return (
    <>
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
