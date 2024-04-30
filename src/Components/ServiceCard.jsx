import { BiArrowFromRight } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;
  return (
    <div className="flex flex-col w-[314px]">
      <img className="w-[314px] h-[208px] rounded-xl mb-4" src={img} alt="" />
      <h3 className="text-[28px] font-semibold text-black">{title}</h3>
      <div className="flex justify-between">
        <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
        <Link>
          <GoArrowRight className="h-6 w-6 hover:scale-x-150 transition-all duration-500 text-[#FF3811]" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
