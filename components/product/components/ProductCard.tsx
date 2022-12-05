import Image from "next/image";
import { numberWithCommas } from "../../../service/numberWithCommas";

export interface ProductCard {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({
  data,
  tabIndex,
  color,
  imageHover,
}: {
  data: ProductCard;
  tabIndex: number;
  color: string;
  imageHover: any;
}) => {
  return (
    <div
      className={`w-full flex flex-col gap-4 py-1 rounded-md hover:shadow-2xl ease-linear duration-300 justify-center items-center group relative hover:shadow-${color.toString()} z-10`}
      tabIndex={tabIndex}
    >
      <a href={`/product/${data.id}`} className="h-64 w-full" tabIndex={-1}>
        <img
          className="h-full w-full object-cover object-center group-hover:rounded-t-md ease-linear duration-300"
          src={data.image}
          alt={data.name}
        />
      </a>

      <p className="text-center font-medium text-gray-700">{data.name}</p>
      <p className="text-center font-medium text-rose-600">
        {numberWithCommas(data.price)} VND
      </p>
      <a
        href={`/product/${data.id}`}
        tabIndex={-1}
        className="text-center bg-rose-500 text-white w-24 p-2 hover:bg-rose-600 ease-linear duration-300"
      >
        Mua ngay
      </a>

      <Image
        src={imageHover}
        alt=""
        style={{ width: 40, height: 40 }}
        className="hidden group-hover:block ease-linear duration-300 group-hover:animate-[spin_4s_linear_infinite] absolute left-[-20px] top-[-10px] z-20"
      />
    </div>
  );
};

export default ProductCard;
