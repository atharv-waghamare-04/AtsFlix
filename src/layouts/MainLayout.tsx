import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileNavbar />
    </>
  );
};

export default MainLayout;
