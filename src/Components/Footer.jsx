import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaVimeo,
  FaInstagram,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Logo from "../assets/image/logo-white-text.png"; 
import Payment from "../assets/image/Home One __ Pabna_files/payment.png"; 

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-800 text-white">
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <div className="footer-logo items-center justify-between p-6 mb-8">
            <img
              src={Logo}
              alt="Pabna_white_text Logo"
              className="mx-auto p-2"
            />
            <p>
              At Pabna, we are committed to providing high-quality products with exceptional service, ensuring a seamless shopping experience.
              <br />
              Discover a wide range of products tailored to meet your everyday needs.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4 footer p-6 items-center justify-between">
          <div>
            <aside>
              <img
                src={Logo}
                alt="Pabna"
                width={90}
                className="mx-auto mb-4"
              />
              <p>
                Pabna Industries Ltd.
                <br />
                Providing reliability since 2024
              </p>
            </aside>
          </div>

          <div>
            <h5 className="font-bold mb-3">CONTACT US</h5>
            <div>
              <p>
                <span className="flex items-center justify-center">
                  <FaMapMarker className="mr-2" />
                  Address: City of London, Guildhall, PO Box 270
                </span>
              </p>
            </div>
            <p>
              <span className="flex items-center justify-center">
                <FaEnvelope className="mr-2" />
                Email: info@pabna.com
              </span>
            </p>
            <p>
              <span className="flex items-center justify-center">
                <FaPhone className="mr-2" />
                Phone: (123) 456-7890
              </span>
            </p>
          </div>

          <div className="col-lg-3 col-md-3 hidden-sm">
            <div className="footer-widget">
              <h5 className="font-bold mb-3 text-left">MY ACCOUNT</h5>
              <ul className="footer-menu text-left">
                <li>
                  <a href="#" className="hover:text-red-500">Order Status</a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">Register</a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">Sign-up</a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">My Wishlist</a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">Payment Options</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-widget">
            <h5 className="font-bold mb-3 text-left">ABOUT US</h5>
            <ul className="footer-menu text-left">
              <li>
                <a href="#" className="hover:text-red-500">Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">Payment</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">Return Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons Centered Across Footer with Hover Effect */}
        <div className="flex justify-center mt-6">
          <FaFacebookF className="mr-4 hover:text-red-500" />
          <FaTwitter className="mr-4 hover:text-red-500" />
          <FaVimeo className="mr-4 hover:text-red-500" />
          <FaInstagram className="mr-4 hover:text-red-500" />
        </div>

        {/* Copyright and Payment Section */}
        <div className="flex justify-center items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-center">
            Copyright ©{" "}
            <a className="text-red-800" href="#">
              BasicTheme
            </a>
            . All Rights Reserved
          </p>
          <img src={Payment} alt="payment methods" className="ml-4 w-32" />
        </div>
      </footer>
    </>
  );
};

export default Footer;