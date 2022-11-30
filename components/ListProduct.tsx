import Image from "next/image";
import flowerIcon1 from "../public/images/flower-list-1.png";
import flowerIcon2 from "../public/images/flower-list-2.png";
import flowerIcon3 from "../public/images/flower-list-3.png";
import flowerIcon4 from "../public/images/flower-list-4.png";
import flowerIcon5 from "../public/images/flower-list-5.png";
import flowerIcon6 from "../public/images/flower-list-6.png";

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

  const arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8];

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
        {arr.map((item: any) => {
          return (
            <div className="w-full flex flex-col gap-4 py-1 rounded-md hover:shadow-2xl ease-linear duration-300 justify-center items-center group relative hover:shadow-rose-400">
              <a href="#" className="h-64 w-full" tabIndex={0}>
                <img
                  className="h-full w-full object-cover object-center group-hover:rounded-t-md ease-linear duration-300"
                  src="https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/hinh%20sua/Mar_2021/Only%20You-500x500.jpg"
                  alt=""
                />
              </a>

              <p className="text-center font-medium text-gray-700">
                Hồng phun xanh đương
              </p>
              <p className="text-center font-medium text-rose-600">
                550.000VND
              </p>
              <a
                href="#"
                className="text-center bg-rose-500 text-white w-24 p-2 hover:bg-rose-600 ease-linear duration-300"
              >
                Mua ngay
              </a>

              <Image
                src={imageIconList[random(0, imageIconList.length - 1)].image}
                alt=""
                width={40}
                height={40}
                className="hidden group-hover:block ease-linear duration-300 group-hover:animate-[spin_4s_linear_infinite] absolute left-[-20px] top-[-10px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
