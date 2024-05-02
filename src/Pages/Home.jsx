import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../../src/assets/images/banner/1.jpg";
import img2 from "../../src/assets/images/banner/2.jpg";
import img3 from "../../src/assets/images/banner/3.jpg";
import img4 from "../../src/assets/images/banner/4.jpg";
import about1 from "../../src/assets/images/about_us/person.jpg";
import about2 from "../../src/assets/images/about_us/parts.jpg";
import { useContext, useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";
const Home = () => {
  const [services, setServices] = useState([]);
  const {loading} = useContext(AuthContext)
  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/services")
    .then(data => {
      setServices(data.data)
    })
  }, []);
  if(loading){
    return <Loader/>
  }
  return (
    <div>
      {/* banner slider  */}
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative rounded-lg h-[500px] md:h-[600px] w-full"
        >
          <img src={img1} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start my-20 space-y-6 lg:my-36 text-white">
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
          className="carousel-item relative rounded-lg h-[500px] md:h-[600px] w-full"
        >
          <img src={img2} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start my-20 space-y-6 lg:my-36 text-white">
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
          className="carousel-item relative rounded-lg h-[500px] md:h-[600px] w-full"
        >
          <img src={img3} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start my-20 space-y-6 lg:my-36 text-white">
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
          className="carousel-item relative rounded-lg h-[500px] md:h-[600px] w-full"
        >
          <img src={img4} className="w-full h-full rounded-lg" />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="flex absolute flex-col pl-5 md:pl-16 justify-start my-20 space-y-6 lg:my-36 text-white">
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
      {/* about section  */}
      <div className="my-10">
        <div className="hero-content p-0 flex-col-reverse gap-10 lg:flex-row">
          <div className="card shrink-0 lg:w-1/2 bg-base-100">
            <div className="relative">
              <img
                className="w-[90%] rounded-xl h-[350px] md:h-[473px]"
                src={about1}
                alt=""
              />
              <img src="" alt="" />
              <img
                className="absolute right-2 border-[10px] rounded-t-xl border-white top-1/2 w-[327px] h-[350px] md:h-[332px]"
                src={about2}
                alt=""
              />
              <img src="" alt="" />
            </div>
          </div>
          <div className="text-center flex flex-col lg:w-1/2 lg:text-left">
            <p className="text-xl text-[#FF3811] font-semibold">About Us</p>
            <h1 className="text-5xl mt-8 font-bold lg:w-[85%]">
              We are Qualified & of experience in this field
            </h1>
            <p className="py-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>
        </div>
      </div>
      {/* service section  */}
      <div className="flex flex-col mt-40 mb-10 items-center">
        <p className="text-xl text-[#FF3811] font-semibold">Service</p>
        <h3 className="text-3xl mt-3 font-bold">Our Service Area</h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[60%]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid mb-10 gap-8 grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
        <div className="lg:col-span-3 my-5 mx-auto">
          <button className="btn btn-outline box-border hover:border-[#ddd0] text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811]">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
