import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;
  return (
    <div className="flex flex-col w-[314px]">
      <img className="w-[314px] h-[208px] rounded-xl mb-4" src={img} alt="" />
      <h3 className="text-[28px] font-semibold text-black">{title}</h3>
      <div className="flex gap-2 flex-col">
        <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
        <Link to={`/checkout/${_id}`}>
          <button className="btn hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-[#ddd0] text-white bg-[#FF3811]">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
