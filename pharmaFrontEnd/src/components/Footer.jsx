import React from "react";

export default function Footer() {
  return (
    <>
    <div className="bg-red-700 h-[150px] flex">

<div className="flex-1 flex flex-col items-center justify-center border-r-[3px] border-white/75">    <i className="fa-solid fa-industry text-white text-3xl"></i>
    <p className="text-3xl text-white font-bold mt-2">150+</p>
    <p className="text-white mt-4">Quality Products</p>
  </div>

  <div className="flex-1 flex flex-col items-center justify-center border-r-[3px]  border-white/75">
    <i className="fa-solid fa-users text-white text-3xl"></i>
    <p className="text-3xl text-white font-bold mt-2">200+</p>
    <p className="text-white mt-4">Happy Clients</p>
  </div>

  <div className="flex-1 flex flex-col items-center justify-center border-r-[3px]  border-white/75">
    <i className="fa-solid fa-briefcase text-white text-3xl"></i>
    <p className="text-3xl text-white font-bold mt-2">50+</p>
    <p className="text-white mt-4">Projects Completed</p>
  </div>

  <div className="flex-1 flex flex-col items-center justify-center">
    <i className="fa-solid fa-award text-white text-3xl"></i>
    <p className="text-3xl text-white font-bold mt-2">10+</p>
    <p className="text-white mt-4">Years Experience</p>
  </div>

</div>
   <div className="bg-white-100 h-[250px] flex">

<div className="flex-1 items-top justify-start pt-2">
<div className="flex-1 flex items-center justify-center">
  <img
    src="/logo.jpeg"
    alt="Forwell Logo"
    className="w-[150px] h-auto object-contain mt-2"
  />
</div>
</div>

  <div className="flex-1 flex flex-col items-start justify-center ">
    <h2 className=" text-black font-bold mt-2">Quick Links</h2>
    <p>Home</p>
    <p>About Us</p>
    <p>Products</p>
    <p>Therapeutic Areas</p>
    <p>Quality</p>
    <p>Career</p>
    <p>Contact Us</p>
  </div>

  <div className="flex-1 flex flex-col items-start justify-center  ">
        <h2 className=" text-black font-bold mt-2">Therapeutic Areas</h2>

<p>Anti Infectives</p>
    <p>Cardiovascular</p>
    <p>Gastrointestinal</p>
    <p>Pain Management</p>
    <p>Vitamins & Minerals</p>
    <p>Dermatology</p>
    <p>And More</p>  </div>

  <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className=" text-black font-bold mt-2">Contact Us</h2>

   <p>Home</p>
    <p>About Us</p>
    <p>Products</p>
    <p>Therapeutic Areas</p>
    <p>Quality</p>
    <p>Career</p>
    <p>Contact Us</p>
  </div>

</div>
    <div className="bg-red-700 h-[50px] flex">
</div>

</>
  );
}

