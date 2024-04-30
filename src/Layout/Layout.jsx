import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Layout = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto max-w-7xl">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
