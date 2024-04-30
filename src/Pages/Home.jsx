import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../../src/assets/images/banner/1.jpg";
import img2 from "../../src/assets/images/banner/2.jpg";
import img3 from "../../src/assets/images/banner/3.jpg";
import img4 from "../../src/assets/images/banner/4.jpg";
const Home = () => {
  return (
    <div>
      {/* banner slider  */}
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative rounded-lg md:h-[600px] w-full"
        >
          <img src={img1} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start space-y-6 my-36 text-white">
            <h3 className="lg:text-6xl text-4xl w-[40%] font-bold text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-[90%] lg:w-[50%]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn box-border hover:border-[#ddd0] hover:btn-outline text-[#ffffff] border-[#FF3811] bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline box-border hover:border-[#ddd0] text-[#ffffff] border-[#ffffff] hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowLeft className="h-6 w-6" />
            </a>
            <a
              href="#slide2"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item md:h-[600px] rounded-lg relative w-full"
        >
          <img src={img2} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start space-y-6 my-36 text-white">
            <h3 className="lg:text-6xl text-4xl w-[40%] font-bold text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-[90%] lg:w-[50%]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn box-border hover:border-[#ddd0] hover:btn-outline text-[#ffffff] border-[#FF3811] bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline box-border hover:border-[#ddd0] text-[#ffffff] border-[#ffffff] hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowLeft className="h-6 w-6" />
            </a>
            <a
              href="#slide3"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item md:h-[600px] relative rounded-lg w-full"
        >
          <img src={img3} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start space-y-6 my-36 text-white">
            <h3 className="lg:text-6xl text-4xl w-[40%] font-bold text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-[90%] lg:w-[50%]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn box-border hover:border-[#ddd0] hover:btn-outline text-[#ffffff] border-[#FF3811] bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline box-border hover:border-[#ddd0] text-[#ffffff] border-[#ffffff] hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowLeft className="h-6 w-6" />
            </a>
            <a
              href="#slide4"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item md:h-[600px] rounded-lg relative w-full"
        >
          <img src={img4} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start space-y-6 my-36 text-white">
            <h3 className="lg:text-6xl text-4xl w-[40%] font-bold text-white">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-[90%] lg:w-[50%]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn box-border hover:border-[#ddd0] hover:btn-outline text-[#ffffff] border-[#FF3811] bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline box-border hover:border-[#ddd0] text-[#ffffff] border-[#ffffff] hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowLeft className="h-6 w-6" />
            </a>
            <a
              href="#slide1"
              className="btn border-0 text-white bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle"
            >
              <GoArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
