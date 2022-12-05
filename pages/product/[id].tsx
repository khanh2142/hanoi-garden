import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product/components/ProductCard";
import api from "../../data/products.json";

import errorIcon from "../../public/images/404-icon.png";

import flowerIcon2 from "public/images/flower-list-2.png";
import { numberWithCommas } from "../../service/numberWithCommas";

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

  const [relativeData, setRelativeData] = useState([] as any);

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

    let arr: any[] = [];

    for (let i: any = 0; i < 4; i++) {
      arr.push({
        id: i,
        name: "Hồng phun xanh đương",
        price: 100000,
        image:
          "https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/hinh%20sua/Mar_2021/Only%20You-500x500.jpg",
        type: "hoa_tinh_yeu",
      });
    }

    setRelativeData(arr);
  }, [id]);

  const handleChangeValue = (e: any) => {
    setQuantity(Number(e.target.value));
  };

  const addToCart = (id: any) => {
    const currentProduct = { id: id, quantity: quantity };

    const local: any = localStorage.getItem("products");

    const localProducts: any = JSON.parse(local);

    const arr: any[] = [];

    arr.push(currentProduct);

    if (!localProducts) {
      localStorage.setItem("products", JSON.stringify(arr));
    } else {
      const dummyArr: any[] = [...localProducts];

      localStorage.setItem(
        "products",
        JSON.stringify(
          dummyArr.map((item: any) => {
            if (item.id === id) {
              item.quantity = item.quantity + quantity;
            }
            return item;
          })
        )
      );
    }

    console.log(localProducts);
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

                  <button
                    className="text-white bg-yellow-500 p-2 active:scale-105 hover:bg-yellow-600 ease-linear duration-300 hover:shadow-lg hover:shadow-yellow-400"
                    onClick={() => addToCart(data.id)}
                  >
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
              <div className="grid grid-cols-4 gap-6 mt-20">
                {relativeData.map((item: any, index: any) => {
                  return (
                    <ProductCard
                      data={item}
                      tabIndex={index + 1}
                      color="rose-600"
                      imageHover={flowerIcon2}
                      key={item.id}
                    />
                  );
                })}
              </div>
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
