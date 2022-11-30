import Advertise from "./Advertise";
import Category from "./Category";
import FeatureProduct from "./FeatureProduct";
import Header from "./Header";
import ListProduct from "./ListProduct";

const Home = () => {
  return (
    <>
      <Header />
      <Advertise />
      <FeatureProduct />
      <Category />
      <ListProduct />
      <div className="mt-96">Home</div>
    </>
  );
};

export default Home;
