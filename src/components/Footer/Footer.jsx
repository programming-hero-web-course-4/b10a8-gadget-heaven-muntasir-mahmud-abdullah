import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-center py-10">
                  <h1 className="text-5xl  font-bold text-black">Gadget Store</h1>
            <p className="py-6 mx-auto w-2/5 text-black ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
              <div className="divider"></div>
            <footer className="text-gray-500 p-4 flex justify-center gap-24 text-center">
      <nav className="flex flex-col">
        <h6 className="text-xl mb-3 text-black font-bold">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="text-xl mb-3 text-black font-bold">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="text-xl mb-3 text-black font-bold">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </div>

  );
};

export default Footer;
