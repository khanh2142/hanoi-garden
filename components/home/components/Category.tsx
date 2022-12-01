import { useEffect, useState } from "react";
import api from "../../../data/productCategories.json";
import ProductCategoryCard from "../../product/components/ProductCategoryCard";

const Category = () => {
  const [data, setData] = useState([] as any);

  const getData = async () => {
    await setData(api);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-20 mx-auto grid grid-cols-5 gap-2">
      {data.map((item: any) => {
        return <ProductCategoryCard data={item} key={item.type} />;
      })}
    </div>
  );
};

export default Category;
