import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
