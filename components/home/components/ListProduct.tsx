import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "../../product/components/ProductCard";

import flowerIcon1 from "public/images/flower-list-1.png";
import flowerIcon2 from "public/images/flower-list-2.png";
import flowerIcon3 from "public/images/flower-list-3.png";
import flowerIcon4 from "public/images/flower-list-4.png";
import flowerIcon5 from "public/images/flower-list-5.png";
import flowerIcon6 from "public/images/flower-list-6.png";

const ListProduct = () => {
  const imageIconList: any[] = [
    { image: flowerIcon2 },
    { image: flowerIcon3 },
    { image: flowerIcon4 },
    { image: flowerIcon5 },
    { image: flowerIcon6 },
  ];

  const random = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [data, setData] = useState([] as any);

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
