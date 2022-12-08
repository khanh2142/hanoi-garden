import Image from "next/image";
import ProductCard from "../../product/components/ProductCard";

import flowerIcon1 from "public/images/flower-list-1.png";
import flowerIcon2 from "public/images/flower-list-2.png";
import flowerIcon3 from "public/images/flower-list-3.png";
import flowerIcon4 from "public/images/flower-list-4.png";
import flowerIcon5 from "public/images/flower-list-5.png";
import flowerIcon6 from "public/images/flower-list-6.png";

import { useEffect, useState } from "react";
import { random } from "../../../service/randomNumber";

import api from "../../../data/products.json";

const ListProduct = () => {
  const imageIconList: any[] = [
    { image: flowerIcon2 },
    { image: flowerIcon3 },
    { image: flowerIcon4 },
    { image: flowerIcon5 },
    { image: flowerIcon6 },
  ];

  const [data, setData] = useState([] as any);

  useEffect(() => {
    let arr: any[] = [];
    for (let item = 0; item < 8; item++) {
      arr.push(getRandomedItem(arr));
    }

    setData(arr);
  }, []);

  const getRandomedItem: any = (arr: any) => {
    let item = api[random(0, api.length - 1)];
    if (
      arr.find((c: any) => {
        return c.id === item.id;
      })
    ) {
      return getRandomedItem(arr);
    } else {
      return item;
    }
  };

  return (
    <div className="mt-12">
      <div className="w-full flex items-center gap-3 justify-center">
        <h3 className="uppercase text-2xl font-bold group relative">
          Một số sản phẩm
          <Image
            src={flowerIcon1}
            alt=""
            width={64}
            height={64}
            className="group-hover:animate-[spin_3s_linear_infinite] absolute left-[-70px] top-[-15px]"
          />
          <Image
            src={flowerIcon1}
            alt=""
            width={64}
            height={64}
            className="group-hover:animate-[spin_3s_linear_infinite] absolute right-[-70px] top-[-15px]"
          />
        </h3>
      </div>

      <div className="grid mt-12 grid-cols-4 gap-10">
        {data.map((item: any, index: number) => {
          return (
            <ProductCard
              key={item.id}
              data={item}
              tabIndex={index + 1}
              color="rose-400"
              imageHover={
                imageIconList[random(0, imageIconList.length - 1)].image
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
