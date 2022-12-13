import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import flowerIcon2 from "public/images/flower-list-2.png";
import flowerIcon3 from "public/images/flower-list-3.png";
import flowerIcon4 from "public/images/flower-list-4.png";
import flowerIcon5 from "public/images/flower-list-5.png";
import flowerIcon6 from "public/images/flower-list-6.png";
import ProductCard from "./components/ProductCard";

import { useEffect, useState } from "react";
import categories from "../../data/productCategories.json";
import api from "../../data/products.json";
import { random } from "../../service/randomNumber";

const ProductContainer = () => {
  const imageIconList: any[] = [
    { image: flowerIcon2 },
    { image: flowerIcon3 },
    { image: flowerIcon4 },
    { image: flowerIcon5 },
    { image: flowerIcon6 },
  ];

  const [data, setData] = useState([] as any);

  useEffect(() => {
    // console.log({ carousel: categories, products: api });
    const arr = categories.reduce((prev: any, current: any) => {
      current.list = api
        .map((item: any) => {
          return item.type === current.type ? item : null;
        })
        .filter((item: any) => {
          return item;
        });
      return [...prev, current];
    }, []);
    setData(arr);
  }, []);

  return (
    <div className="mt-20 flex flex-col">
      {data.map((initItem: any) => {
        return (
          <div key={initItem.type}>
            <h1
              className={`text-${initItem.color} text-3xl uppercase font-bold text-center`}
            >
              {initItem.name}
            </h1>
            <Carousel
              className="w-full z-0 p-10 bg-transparent"
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showThumbs={false}
              showStatus={false}
            >
              <div className="grid grid-cols-4 gap-4 p-6">
                {initItem.list.map((item: any, index: number) => {
                  if (item.type === initItem.type && index < 8) {
                    return (
                      <ProductCard
                        key={item.id}
                        data={item}
                        tabIndex={index + 1}
                        color={initItem.color}
                        imageHover={
                          imageIconList[random(0, imageIconList.length - 1)]
                            .image
                        }
                      />
                    );
                  }
                })}
              </div>

              <div className="grid grid-cols-4 gap-4 p-6">
                {initItem.list.map((item: any, index: number) => {
                  if (item.type === initItem.type && index >= 8) {
                    return (
                      <ProductCard
                        key={item.id}
                        data={item}
                        tabIndex={index + 1}
                        color={initItem.color}
                        imageHover={
                          imageIconList[random(0, imageIconList.length - 1)]
                            .image
                        }
                      />
                    );
                  }
                })}
              </div>
            </Carousel>
          </div>
        );
      })}
    </div>
  );
};

export default ProductContainer;
