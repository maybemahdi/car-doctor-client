import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = user?.email || form.email.value;
    const serviceName = data.title;
    const price = data.price;
    const message = form.message.value;
    const info = {
      name: `${firstName} ${lastName}`,
      phone,
      email,
      serviceName,
      price,
      message,
    };
    console.log(info);
    axios.post("https://car-doctor-server-roan-beta.vercel.app/bookings", info).then((res) => {
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
            title: "Good job!",
            text: "You Successfully Booked!",
            icon: "success"
          });
      }
    });
  };
  return (
    <div>
      <div
        className="hero my-10 h-[300px] rounded-[10px]"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      >
        <div className="hero-overlay rounded-[10px] bg-opacity-60"></div>
        <h1 className="md:text-5xl text-center text-3xl text-white font-bold">
          Checkout {data.title}
        </h1>
      </div>
      <div className="bg-[#F3F3F3] my-10 rounded-[10px] p-5 lg:p-[97px]">
        <form onSubmit={handleOrder}>
          <div className="grid gap-5 grid-cols-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Your Phone"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Service Name"
                name="serviceName"
                defaultValue={data.title}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Service Cost"
                name="serviceCost"
                defaultValue={data.price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-2">
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea md:h-[250px] textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn col-span-2 btn-block hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-[#ddd0] text-white bg-[#FF3811]"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
