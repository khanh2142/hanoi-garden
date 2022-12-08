import Image from "next/image";

import hotIcon from "public/images/hot-icon.png";
import purchaseIcon from "public/images/purchase-icon.png";
import { useEffect, useState } from "react";

import api from "../../../data/products.json";
import { random } from "../../../service/randomNumber";

const FeatureProduct = () => {
  const [product, setProduct] = useState({} as any);
  useEffect(() => {
    setProduct(api[random(0, api.length - 1)]);
  }, []);

  return (
    <div className="mx-auto mt-5 flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-3xl font-semibold">Sản phẩm nổi bật</h2>
        <Image
          src={hotIcon}
          alt="Hot Product"
          width={40}
          height={40}
          className="ease-linear duration-700 animate-zoomInOut"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <p className="text-2xl capitalize font-bold text-pink-400">
            {product.name}
          </p>
          <desc className="italic">" {product.description} "</desc>

          <div className="flex gap-5">
            <a
              href={`/product/${product.id}`}
              className="bg-red-400 p-2 rounded-sm flex gap-2 items-center text-white font-bold uppercase group hover:bg-red-600 ease-linear duration-200 shadow-lg"
            >
              Mua ngay
              <Image
                src={purchaseIcon}
                alt="Buy now!"
                width={32}
                height={32}
                className="ease-linear duration-300 group-hover:scale-125 group-hover:rotate-[360deg]"
              />
            </a>
          </div>
        </div>

        {/* ------ */}

        <div
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundPosition: "40% 40%",
          }}
          className="h-64 w-full bg-no-repeat bg-cover rounded-lg shadow-lg "
        ></div>
      </div>
    </div>
  );
};

export default FeatureProduct;
