import { Outlet } from "react-router";
import { Footer, Navbar } from "./components";
import { ToastContainer } from "react-toastify";

const Layouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Layouts;
