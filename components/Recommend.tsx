import Image from "next/image";
import Recommend1 from "../public/images/recommend-1.png";
import Recommend2 from "../public/images/recommend-2.png";
import Recommend3 from "../public/images/recommend-3.png";

const Recommend = () => {
  return (
    <div className="mx-auto grid grid-cols-3 gap-5 mt-20 border-t-2 border-b-2">
      <div className="w-full flex gap-5 items-center p-2">
        <Image src={Recommend1} alt="" width={96} height={96} />
        <div className="w-full h-32">
          <h3 className="text-lg text-center font-medium uppercase mb-2">
            Giao hàng nhanh
          </h3>
          <p className="italic">
            Giao hàng nhanh chóng, không để khách hàng chờ lâu.
          </p>
        </div>
      </div>
      <div className="w-full flex gap-5 items-center p-2">
        <Image src={Recommend2} alt="" width={96} height={96} />
        <div className="w-full h-32">
          <h3 className="text-lg text-center font-medium uppercase mb-2">
            Phục vụ tận tâm
          </h3>
          <p className="italic">
            Chúng tôi luôn phục vụ tận tâm đối với khách hàng, luôn tư vấn, chia
            sẻ thông tin sản phẩm với khách hàng.
          </p>
        </div>
      </div>
      <div className="w-full flex gap-5 items-center p-2">
        <Image src={Recommend3} alt="" width={96} height={96} />
        <div className="w-full h-32">
          <h3 className="text-lg text-center font-medium uppercase mb-2">
            Hỗ trợ 24/24
          </h3>
          <p className="italic">
            Chúng tôi luôn lắng nghe phản hồi từ khách hàng, trợ giúp khách hàng
            mọi lúc mọi nơi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
