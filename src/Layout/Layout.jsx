import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto max-w-7xl">
        <Nav />
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
