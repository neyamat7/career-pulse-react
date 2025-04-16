import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto py-20 px-5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          <div className=" flex flex-col sm:items-center md:items-start">
            <h1 className="text-2xl font-bold">CareerHub</h1>
            <p className="text-gray-400 sm:w-3/5 md: w-full mb-1 mt-1">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex gap-3 text-xl">
              <div className="bg-white rounded-full p-1">
                <FaFacebookF className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full p-1">
                <FaTwitter className="text-blue-400" />
              </div>

              <div className="bg-white rounded-full p-1">
                <FaInstagram className="text-pink-600" />
              </div>
            </div>
          </div>

          <FooterNav
            title="Company"
            navs={["About Us", "Work", "Latest News", "Careers"]}
          ></FooterNav>

          <FooterNav
            title="Product"
            navs={["Prototype", "Plans & Pricing", "Customers", "Integrations"]}
          ></FooterNav>

          <FooterNav
            title="Support"
            navs={["Help Desk", "Sales", "Become a Partner", "Developers"]}
          ></FooterNav>
        </div>

        <hr className="max-w-screen-xl mx-auto mt-10 border-gray-600" />
        <div className="flex justify-between text-gray-400 pt-10">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
