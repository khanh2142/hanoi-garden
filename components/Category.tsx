const Category = () => {
  return (
    <div className="mt-20 mx-auto grid grid-cols-5 gap-2">
      <div className="w-full py-2 flex items-center justify-center flex-col gap-5">
        <img
          src="https://www.flowercorner.vn/image/catalog/hoa-tinh-yeu.webp"
          alt="Hoa tình yêu"
          className="w-32 h-32 rounded-[50%] shadow-lg hover:shadow-pink-400 ease-linear duration-300 peer"
        />
        <p className="text-xl font-bold uppercase text-gray-600 peer-hover:text-pink-400 ease-linear duration-300 ">
          Hoa tình yêu
        </p>
      </div>
      <div className="w-full py-2 flex items-center justify-center flex-col gap-5">
        <img
          src="https://www.flowercorner.vn/image/catalog/hoa-sinh-nhat.webp"
          alt="Hoa tình yêu"
          className="w-32 h-32 rounded-[50%] shadow-lg hover:shadow-rose-600  ease-linear duration-300 peer"
        />
        <p className="text-xl font-bold uppercase text-gray-600 peer-hover:text-rose-600 ease-linear duration-300">
          Hoa sinh nhật
        </p>
      </div>
      <div className="w-full py-2 flex items-center justify-center flex-col gap-5">
        <img
          src="https://www.flowercorner.vn/image/catalog/hoa-cam-tay-co-dau.webp"
          alt="Hoa tình yêu"
          className="w-32 h-32 rounded-[50%] shadow-lg hover:shadow-amber-500 ease-linear duration-300 peer"
        />
        <p className="text-xl font-bold uppercase text-gray-600 peer-hover:text-amber-500 ease-linear duration-300">
          Hoa cưới
        </p>
      </div>
      <div className="w-full py-2 flex items-center justify-center flex-col gap-5">
        <img
          src="https://www.flowercorner.vn/image/catalog/hoa-khai-truong.webp"
          alt="Hoa tình yêu"
          className="w-32 h-32 rounded-[50%] shadow-lg hover:shadow-sky-500 ease-linear duration-300 peer"
        />
        <p className="text-xl font-bold uppercase text-gray-600 peer-hover:text-sky-500 ease-linear duration-300">
          Hoa khai trương
        </p>
      </div>
      <div className="w-full py-2 flex items-center justify-center flex-col gap-5">
        <img
          src="https://www.flowercorner.vn/image/catalog/hoa-tang-le.webp"
          alt="Hoa tình yêu"
          className="w-32 h-32 rounded-[50%] shadow-lg hover:shadow-purple-500 ease-linear duration-300 peer"
        />

        <p className="text-xl font-bold uppercase text-gray-600 peer-hover:text-purple-500 ease-linear duration-300">
          Hoa chia buồn
        </p>
      </div>
    </div>
  );
};

export default Category;
