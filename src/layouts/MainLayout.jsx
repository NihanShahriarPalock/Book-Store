import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
      <div className="mx-2 lg:mx-28">
        <div className='h-16 my-4 lg:my-10'>
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default MainLayout;