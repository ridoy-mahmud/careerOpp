import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Root.css";
const Root = () => {
  return (
    <div className="bg-white text-black font">
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
