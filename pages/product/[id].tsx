import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../data/products.json";

import errorIcon from "../../public/images/404-icon.png";

export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({} as Product);

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);

  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const getData = async (id: any) => {
    const findData = await api.find((item: Product) => {
      return item.id === Number(id);
    });

    if (findData) {
      setData(findData);
    }

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const handleChangeValue = (e: any) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <>
      <NextSeo
        title={
          data && Object.keys(data).length > 0
            ? data.name
            : "Không tìm thấy trang"
        }
      ></NextSeo>

      <div className="mx-auto mt-20">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : data && Object.keys(data).length > 0 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold text-rose-500">
              Chi tiết sản phẩm
            </h2>

            <div className="flex gap-4 mt-10">
              <img src={data.image} alt={data.name} />
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{data.name}</h2>
                <desc className="italic leading-8">{data.description}</desc>
                <p className="text-rose-600 text-2xl">
                  {numberWithCommas(data.price)} VND
                </p>
                <div className="flex gap-10 items-center">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    className="border-2 h-20 w-24 pl-2"
                    value={quantity}
                    onChange={(value: any) => {
                      handleChangeValue(value);
                    }}
                    onMouseLeave={(e: any) => {
                      if (
                        Number(e.target.value) <= 0 ||
                        Number(e.target.value) > 100
                      ) {
                        setQuantity(1);
                      }
                    }}
                  />

                  <button className="text-white bg-yellow-500 p-2 active:scale-105 hover:bg-yellow-600 ease-linear duration-300 hover:shadow-lg hover:shadow-yellow-400">
                    Thêm vào giỏ hàng
                  </button>
                  <button className="bg-rose-500 p-2 text-white active:scale-105 hover:bg-rose-600 ease-linear duration-300 hover:shadow-lg hover:shadow-rose-400">
                    Mua hàng
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-center text-2xl font-bold text-rose-500">
                Có thể bạn cũng thích
              </h3>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center mb-64">
            <img
              alt="Sản phẩm không tồn tại"
              src={errorIcon.src}
              className="w-36 h-36"
            />
            <h3 className="font-bold text-red-500 text-3xl">
              Rất tiếc, có vẻ như đã có lỗi xảy ra!
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailProduct;
