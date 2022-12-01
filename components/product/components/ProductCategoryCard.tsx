export interface ProductCategoryCard {
  name: string;
  image: string;
  color: string;
}

const ProductCategoryCard = ({ data }: { data: ProductCategoryCard }) => {
  return (
    <div className="w-full py-2 flex items-center justify-center flex-col gap-5">
      <img
        src={data.image}
        alt={data.name}
        className={`w-32 h-32 rounded-[50%] shadow-lg hover:shadow-${data.color} ease-linear duration-300 peer`}
      />
      <p
        className={`text-xl font-bold uppercase text-gray-600 peer-hover:text-${data.color} ease-linear duration-300`}
      >
        {data.name}
      </p>
    </div>
  );
};

export default ProductCategoryCard;
