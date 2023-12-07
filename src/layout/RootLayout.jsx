import { NavLink } from "react-router-dom";
import Vector from "../icons/Vector"
import Search from "../icons/Search";
import Nati from "../icons/Nati";
import Fesbook from "../icons/Fesbook";
import Twitter from "../icons/Twitter";
import Linkedin from "../icons/Linkedin";


function RootLayout() {
  return (
    <>
      <header className=" h-[120px] bg-[rgba(0,0,0,0.93)]">
        <nav className=" container mx-auto flex items-center justify-between py-[30px]">
          <div className=" flex items-center justify-center">
            <Vector />
            <p className=" text-white">StreamVibe</p>
          </div>
          <div>
            <ul className="flex items-center justify-center  text-white bg-black w-[430px] h-[65px]  rounded-2xl ">
              <li className=" text-center pt-[5px] w-[100px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="  text-center pt-[5px] w-[100px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)] ">
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li className=" text-center pt-[5px] w-[100px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)] ">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="  text-center pt-[5px] w-[100px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)] ">
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <Search />
            <Nati />
          </div>
        </nav>
      </header>
      <footer className=" bg-black">
        <div className=" bg-black container mx-auto flex items-center justify-between">
          <div className="text-white mt-[57px]">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <div className="grid gap-y-3">
              <p>Categories</p>
              <p>Devices</p>
              <p>Pricing</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className=" text-white mt-[57px]">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <div className="grid gap-y-3">
                <p>Gernes</p>
                <p>Trending</p>
                <p>New Release</p>
                <p>Popular</p>
              </div>
            </ul>
          </div>
          <div className=" text-white mt-[57px]">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/SHows">Shows</NavLink>
              </li>
              <div className="grid gap-y-3">
                <p>Gernes</p>
                <p>Trending</p>
                <p>New Release</p>
                <p>Popular</p>
              </div>
            </ul>
          </div>
          <div className=" text-white mb-[50px] ">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/Shows">Shows</NavLink>
              </li>
              <p>Contact Us</p>
            </ul>
          </div>
          <div className=" text-white mb-[15px] ">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <div className="grid gap-y-3">
                <p>Plans</p>
                <p>Features</p>
              </div>
            </ul>
          </div>
          <div className="text-white">
            <h1>Connect With Us</h1>
            <div className="flex items-center justify-center gap-4 mt-8 mb-3 ">
                <Fesbook />
                <Twitter />
                <Linkedin />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default RootLayout