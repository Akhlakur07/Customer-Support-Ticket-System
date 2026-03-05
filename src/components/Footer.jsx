import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20">
      <div className="grid md:grid-cols-6 gap-10 px-[4%]">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">
            CS — Ticket System
          </h2>
          <p className="text-[16px] leading-6 max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-xl font-medium mb-4">Company</h3>
          <ul className="space-y-3 text-[16px]">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-medium mb-4">Services</h3>
          <ul className="space-y-3 text-[16px]">
            <li className="hover:text-white cursor-pointer">
              Products & Services
            </li>
            <li className="hover:text-white cursor-pointer">
              Customer Stories
            </li>
            <li className="hover:text-white cursor-pointer">
              Download Apps
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white text-xl font-medium mb-4">Information</h3>
          <ul className="space-y-3 text-[16px]">
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">
              Join Us
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-xl font-medium mb-4">Social Links</h3>
          <ul className="space-y-3 text-[16px]">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <FaSquareXTwitter /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <FaLinkedin /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <FaSquareFacebook /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <IoMdMail /> support@cst.com
            </li>
          </ul>
        </div>
      </div>
<div>
    
</div>
      {/* Divider */}
      <div className="border-t border-gray-800 mx-[4%] mt-20 py-7.5 text-center text-sm text-[#FAFAFA]">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;