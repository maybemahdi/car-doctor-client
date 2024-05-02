import { Link } from "react-router-dom";
import errorImg from "../../src/assets/err.png";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <Link to={"/"}>
        <button className="btn hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-[#ddd0] text-white bg-[#FF3811]">
          Go Home
        </button>
      </Link>
      <img src={errorImg} alt="" />
    </div>
  );
};

export default Error;
