import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import flowerIcon2 from "../public/images/flower-list-2.png";
import flowerIcon3 from "../public/images/flower-list-3.png";
import flowerIcon4 from "../public/images/flower-list-4.png";
import flowerIcon5 from "../public/images/flower-list-5.png";
import flowerIcon6 from "../public/images/flower-list-6.png";
import ProductCard from "./components/ProductCard";

const ProductContainer = () => {
  const imageIconList: any[] = [
    { image: flowerIcon2 },
    { image: flowerIcon3 },
    { image: flowerIcon4 },
    { image: flowerIcon5 },
    { image: flowerIcon6 },
  ];

  const initData = [
    {
      title: "HOA TÌNH YÊU",
      color: "pink-400",
      // textColor: "text-pink-400",
    },
    {
      title: "HOA SINH NHẬT",
      color: "rose-600",
      // textColor: "text-rose-600",
    },
    {
      title: "HOA CƯỚI",
      color: "amber-500",
      // textColor: "text-amber-500",
    },
    {
      title: "HOA KHAI TRƯƠNG",
      color: "sky-500",
      // textColor: "text-sky-500",
    },
    {
      title: "HOA CHIA BUỒN",
      color: "purple-500",
      // textColor: "text-purple-500",
    },
  ];

  const limit = 8;

  const [page, setPage] = useState(0);

  const [data, setData] = useState([] as any);

  const random = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    let arr: any[] = [];

    for (let i: any = 0; i < 8; i++) {
      arr.push({
        id: i,
        name: "Hồng phun xanh đương",
        price: 100000,
        image:
          "https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/hinh%20sua/Mar_2021/Only%20You-500x500.jpg",
        type: "hoa_tinh_yeu",
      });
    }

    setData(arr);
  }, []);

  return (
    <div className="mt-20 flex flex-col">
      {initData.map((initItem: any) => {
        return (
          <div key={initItem.title}>
            <h3
              className={`text-${initItem.color} text-3xl uppercase font-bold text-center`}
            >
              {initItem.title}
            </h3>
            <Carousel
              className="w-full z-0 p-10 bg-transparent"
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showThumbs={false}
              showStatus={false}
            >
              <div className="grid grid-cols-4 gap-4 p-6">
                {data.map((item: any, index: number) => {
                  return (
                    <ProductCard
                      key={item.id}
                      data={item}
                      tabIndex={index + 1}
                      color={initItem.color}
                      imageHover={
                        imageIconList[random(0, imageIconList.length - 1)].image
                      }
                    />
                  );
                })}
              </div>

              <div className="grid grid-cols-4 gap-4 p-6">
                {data.map((item: any, index: number) => {
                  return (
                    <ProductCard
                      key={item.id}
                      data={item}
                      tabIndex={index + 1}
                      color={initItem.color}
                      imageHover={
                        imageIconList[random(0, imageIconList.length - 1)].image
                      }
                    />
                  );
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
