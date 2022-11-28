import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../public/images/flower-banner-1.png";
import banner2 from "../public/images/flower-banner-2.png";

const Advertise = () => {
  return (
    <div className="mx-auto flex">
      <Carousel
        className="w-3/4 rounded-l-lg overflow-hidden"
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
      >
        <div>
          <img
            src="https://dienhoathudo.com/wp-content/uploads/2022/01/banner-4.jpg"
            alt="Cánh đồng hoa"
            className="h-80 object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://dienhoathudo.com/wp-content/uploads/2022/01/banner-6.jpg"
            className="h-80 object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://dc.flowercorner.vn/uploads/P62ff2f312a2af5.69604601_banner-4.jpg"
            className="h-80 object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://dc.flowercorner.vn/uploads/P62ff2f07d116a2.71972535_banner-2.jpg"
            className="h-80 object-cover object-center"
          />
        </div>

        <div>
          <img
            src="https://dc.flowercorner.vn/uploads/P635f466ebc2e99.20900402_banner%201%20copy.jpg"
            className="h-80 object-cover object-center"
          />
        </div>
      </Carousel>

      <div className="flex flex-col h-80 w-1/4">
        <div className="h-40 flex items-center px-5 bg-sky-200 rounded-tr-lg">
          <div
            style={{ backgroundImage: `url(${banner1.src})` }}
            className="w-28 h-28 bg-contain bg-no-repeat ease-linear duration-300 hover:scale-125"
          />
          <div className="text-center w-full text-2xl">
            Hoa đẹp nhất <br />
            <strong className="text-3xl text-red-400">Việt Nam</strong>
          </div>
        </div>
        <div className="h-40 flex items-center px-5 bg-green-200 rounded-br-lg ">
          <div className="text-center w-full text-2xl ">
            Giá rẻ nhất <br />
            <strong className="text-3xl text-red-400">Thị trường</strong>
          </div>

          <div
            style={{ backgroundImage: `url(${banner2.src})` }}
            className="w-28 h-28 bg-contain bg-no-repeat ease-linear duration-300 hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
