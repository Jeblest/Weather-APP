"use client"
import Link from "next/link";
function NavBar() {
  return (
    <div className="bg-left_bg flex flex-col h-screen w-60 justify-between pl-4">
      <div>
      <div className="mt-16 h-24 flex justify-start items-center">
        <img
          className="w-16 h-16 rounded-full inline-block mr-4"
          src="/assets/icons/mainLogo.jpg"
          alt="main logo"
        />
        <span className="text-gray-400">Weather App</span>
      </div>
      <div className="mt-24 flex flex-col ">
        <Link className="mb-8" href={"/dashboard"}>Dashboard</Link>
        <Link href={"/saved-locations"}>Saved Locations</Link>
      </div>
      
      </div>

    </div>
  );
}

export default NavBar;
