import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";
import banner from "../../src/assets/images/banner/6.jpg";
import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyCart = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [myBookings, setMyBookings] = useState([]);
  // const url = `https://car-doctor-server-roan-beta.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((data) => {
      setMyBookings(data.data);
    });
  }, [url, axiosSecure]);
  if (loading) {
    return <Loader></Loader>;
  }
  const handleConfirm = (id) => {
    axios
      .patch(`https://car-doctor-server-roan-beta.vercel.app/bookings/${id}`, { status: "confirmed" })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Booking Has Been Confirmed");
          const remaining = myBookings.filter((booking) => booking._id !== id);
          const updated = myBookings.find((booking) => booking._id === id);
          updated.status = "confirmed";
          setMyBookings([...remaining, updated]);
        }
      });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://car-doctor-server-roan-beta.vercel.app/bookings/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Booking has been Cancelled.",
              icon: "success",
            });
            const remaining = myBookings.filter(
              (booking) => booking._id !== id
            );
            setMyBookings(remaining);
          }
        });
      }
    });
  };
  return (
    <div>
      <div
        className="hero my-10 h-[300px] rounded-[10px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay rounded-[10px] bg-opacity-60"></div>
        <h1 className="md:text-5xl text-center text-3xl text-white font-bold">
          Car Details
        </h1>
      </div>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            {myBookings.map((booking) => (
              <tr key={booking._id}>
                <th>
                  <button onClick={() => handleDelete(booking._id)}>
                    <MdCancel className="h-8 w-8" />
                  </button>
                </th>
                <td>{booking.serviceName}</td>
                <td>${booking.price}</td>
                <td>{booking.email}</td>
                <td>
                  {booking.status === "confirmed" ? (
                    <button
                      className="btn hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-[#ddd0] text-white bg-[#FF3811]:"
                      disabled="disabled"
                    >
                      Confirmed
                    </button>
                  ) : (
                    <button
                      onClick={() => handleConfirm(booking._id)}
                      className="btn hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-[#ddd0] text-white bg-[#FF3811]"
                    >
                      Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
