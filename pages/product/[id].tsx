import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product/components/ProductCard";
import api from "../../data/products.json";

import errorIcon from "../../public/images/404-icon.png";

import flowerIcon2 from "public/images/flower-list-2.png";
import { toast, ToastContainer } from "react-toastify";
import { numberWithCommas } from "../../service/numberWithCommas";

import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

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

    const arr: any = api.filter((item: any) => {
      if (item.type === data.type && item.id !== data.id) {
        return item;
      }
    });

    arr.length = 4;

    setRelativeData(arr);
  }, [id, data]);

  const handleChangeValue = (e: any) => {
    setQuantity(Number(e.target.value));
  };

  const addToCart = (id: any) => {
    const currentProduct = { id: id, quantity: quantity };

    const local: any = localStorage.getItem("products");

    const localProducts: any[] = JSON.parse(local) || [];

    if (!localProducts || localProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify([{ ...currentProduct }]));
    } else {
      const dummyArr: any[] = [...localProducts];

      if (
        dummyArr.find((item: any) => {
          return item.id === currentProduct.id;
        })
      ) {
        const newArr: any[] = dummyArr.map((item: any) => {
          if (item.id === currentProduct.id) {
            item.quantity += currentProduct.quantity;
          }
          return item;
        });

        localStorage.setItem("products", JSON.stringify(newArr));
      } else {
        dummyArr.push(currentProduct);
        localStorage.setItem("products", JSON.stringify(dummyArr));
      }
    }

    toast.success(`Thêm vào giỏ hàng sản phẩm ${data.name} thành công!`);
  };

  return (
    <>
      <Head>
        <meta property="og:title" content={data.name} key="title" />
        <meta property="og:title" title={data.name} key="title" />
      </Head>
      <NextSeo
        title={
          data && Object.keys(data).length > 0
            ? data.name
            : "Không tìm thấy trang"
        }
        description={data.name}
        canonical={`https://hanoi-garden.vercel.app/cart/${data.id}`}
        openGraph={{
          url: `https://hanoi-garden.vercel.app/cart/${data.id}`,
          title: data.name,
          description: data.description,
          images: [
            {
              url: data.image,
              width: 256,
              height: 256,
              alt: data.name,
              type: "image/*",
            },
          ],
          siteName: "Hà Nội Garden",
        }}
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
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <desc className="italic leading-8">{data.description}</desc>
                <p className="text-rose-600 text-2xl">
                  {numberWithCommas(data.price)} VND
                </p>
                <div className="flex gap-10 items-center">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    className="p-3 w-24 h-10 border-2 border-rose-400 focus:outline-rose-600"
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

      <ToastContainer autoClose={1000} closeButton={false} />
    </>
  );
};

export default DetailProduct;
