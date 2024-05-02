import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import img from "../../src/assets/images/login/login.svg";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    const handleFirebaseError = (errorCode) => {
      switch (errorCode) {
        case "Firebase: Error (auth/invalid-credential).":
          return "Wrong email or password. Please try again.";
        // Add more cases for other error codes as needed
        default:
          return "An error occurred. Please try again later.";
      }
    };
    console.log(userInfo);
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        toast.success("Logged in Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        form.reset();
        const errorMessage = handleFirebaseError(error.message);
        toast.error(errorMessage);
      });
  };
  return (
    <div className="my-16">
      <div className="flex justify-center gap-8 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <img className="w-full h-[502px]" src={img} alt="" />
        </div>
        <div className="lg:w-1/2 h-fit w-full card shrink-0 max-w-md shadow-2xl bg-base-100">
          <h3 className="text-[36px] font-bold text-center">Sign In</h3>
          <form onSubmit={handleLogin} className="card-body">
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
                Sign in
              </button>
            </div>
            <h3 className="font-bold mt-2 text-center">
              New to Website?{" "}
              <span className="text-blue-500">
                <Link to={"/register"}>Register</Link>
              </span>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
