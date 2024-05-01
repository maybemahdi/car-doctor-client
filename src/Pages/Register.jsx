import { useContext } from "react";
import img from "../../src/assets/images/login/login.svg";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const Register = () => {
  const { createUser, update, setUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        toast.success("Account Created Successfully");
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: null,
          })
            .then(() => {
              setUpdate(!update);
              toast.success("Profile Updated");
            })
            .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-16">
      <div className="flex justify-center gap-8 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <img className="w-full h-[502px]" src={img} alt="" />
        </div>
        <div className="lg:w-1/2 h-fit w-full card shrink-0 max-w-md shadow-2xl bg-base-100">
          <h3 className="text-[36px] font-bold text-center">Sign Up</h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-[#ddd0] text-white bg-[#FF3811]"
              >
                Sign Up
              </button>
            </div>
            <h3 className="font-bold mt-2 text-center">Have an Account? <span className="text-blue-500"><Link to={'/login'}>Login</Link></span></h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
