import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import flowerIcon2 from "../public/images/flower-list-2.png";
import flowerIcon3 from "../public/images/flower-list-3.png";
import flowerIcon4 from "../public/images/flower-list-4.png";
import flowerIcon5 from "../public/images/flower-list-5.png";
import flowerIcon6 from "../public/images/flower-list-6.png";

const ProductContainer = () => {
  const imageIconList: any[] = [
    { image: flowerIcon2 },
    { image: flowerIcon3 },
    { image: flowerIcon4 },
    { image: flowerIcon5 },
    { image: flowerIcon6 },
  ];

  const initData: any[] = [
    {
      title: "HOA TÌNH YÊU",
      color: "pink-400",
    },
    {
      title: "HOA SINH NHẬT",
      color: "rose-600",
    },
    {
      title: "HOA CƯỚI",
      color: "amber-500",
    },
    {
      title: "HOA KHAI TRƯƠNG",
      color: "sky-500",
    },
    {
      title: "HOA CHIA BUỒN",
      color: "purple-500",
    },
  ];

  const limit = 8;

  const [page, setPage] = useState(0);

  const [data, setData] = useState([] as any);

  const random = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

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

  console.log(data);

  return (
    <div className="mt-20 flex flex-col">
      {initData.map((initItem: any) => {
        return (
          <div>
            <h3
              className={`text-3xl uppercase font-bold text-center text-${initItem.color}`}
            >
              {initItem.title}
            </h3>
            <Carousel
              className="w-full z-0 p-10 bg-transparent"
              autoPlay={false}
              infiniteLoop={true}
              interval={3000}
              showThumbs={false}
              showStatus={false}
            >
              <div className="grid grid-cols-4 gap-4 p-6">
                {data.map((item: any, index: number) => {
                  return (
                    <div
                      className={`w-full flex flex-col gap-4 py-1 rounded-md hover:shadow-2xl ease-linear duration-300 justify-center items-center group relative hover:shadow-${initItem.color} z-10`}
                      tabIndex={index + 1}
                    >
                      <a
                        href={`/product/${item.id}`}
                        className="h-64 w-full"
                        tabIndex={-1}
                      >
                        <img
                          className="h-full w-full object-cover object-center group-hover:rounded-t-md ease-linear duration-300"
                          src={item.image}
                          alt={item.name}
                        />
                      </a>

                      <p className="text-center font-medium text-gray-700">
                        {item.name}
                      </p>
                      <p className="text-center font-medium text-rose-600">
                        {numberWithCommas(item.price)} VND
                      </p>
                      <a
                        href={`/product/${item.id}`}
                        tabIndex={-1}
                        className="text-center bg-rose-500 text-white w-24 p-2 hover:bg-rose-600 ease-linear duration-300"
                      >
                        Mua ngay
                      </a>

                      <Image
                        src={
                          imageIconList[random(0, imageIconList.length - 1)]
                            .image
                        }
                        alt=""
                        style={{ width: 40, height: 40 }}
                        className="hidden group-hover:block ease-linear duration-300 group-hover:animate-[spin_4s_linear_infinite] absolute left-[-20px] top-[-10px] z-20"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-4 gap-4 p-6">
                {data.map((item: any, index: number) => {
                  return (
                    <div
                      className={`w-full flex flex-col gap-4 py-1 rounded-md hover:shadow-2xl ease-linear duration-300 justify-center items-center group relative hover:shadow-${initItem.color}`}
                      tabIndex={index + 1}
                    >
                      <a
                        href={`/product/${item.id}`}
                        className="h-64 w-full"
                        tabIndex={-1}
                      >
                        <img
                          className="h-full w-full object-cover object-center group-hover:rounded-t-md ease-linear duration-300"
                          src={item.image}
                          alt={item.name}
                        />
                      </a>

                      <p className="text-center font-medium text-gray-700">
                        {item.name}
                      </p>
                      <p className="text-center font-medium text-rose-600">
                        {numberWithCommas(item.price)} VND
                      </p>
                      <a
                        href={`/product/${item.id}`}
                        tabIndex={-1}
                        className="text-center bg-rose-500 text-white w-24 p-2 hover:bg-rose-600 ease-linear duration-300"
                      >
                        Mua ngay
                      </a>

                      <Image
                        src={
                          imageIconList[random(0, imageIconList.length - 1)]
                            .image
                        }
                        alt=""
                        style={{ width: 40, height: 40 }}
                        className="hidden group-hover:block ease-linear duration-300 group-hover:animate-[spin_4s_linear_infinite] absolute left-[-20px] top-[-10px] z-20"
                      />
                    </div>
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
