import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlus,
  FaVimeo,
  FaInstagram,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" bg-zinc-800  text-white">
        <div className="text-center  mt-8 border-t border-gray-700 pt-4">
          <div className="footer-logo items-center justify-between p-6">
            <img
              src="./src/assets/image/logo-white-text.png"
              alt="Pabna_white_text Logo"
              className="mx-auto p-2"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore <br /> magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation.
            </p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4 footer p-6  items-center justify-between">
          <div>
            <aside>
              <img
                src="./src/assets/image/logo P.jpeg"
                alt="Pabna"
                width={50}
                className="mx-auto"
              />
              <p>
                Pabna Industries Ltd.
                <br />
                Providing reliable since 2024
              </p>
            </aside>
          </div>
          <div>
            <h5 className="font-bold mb-3">CONTACT US</h5>
            <div>
              <p>
                <FaMapMarker className="mr-2" />
                Address : City of London, Guildhall, PO Box 270
              </p>
            </div>
            <p>
              {" "}
              <FaEnvelope className="mr-2" />
              Email: info@pabna.com
            </p>
            <p>
              <FaPhone className="mr-2" />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="col-lg-3 col-md-3 hidden-sm">
            <div className="footer-widget">
              <h5 className="font-bold mb-3">MY ACCOUNT</h5>
              <ul className="footer-menu">
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Sign-up</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Payment Options</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-widget">
            <h5 className="font-bold mb-3">ABOUT US</h5>
            <ul class="footer-menu">
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-4">
          <FaFacebookF className="mr-4" />
          <FaTwitter className="mr-4" />
          <FaGooglePlus className="mr-4" />
          <FaVimeo className="mr-4" />
          <FaInstagram className="mr-4" />
        </div>

        <p className="text-center mt-8 border-t border-gray-700 pt-4">
          Copyright ©{" "}
          <a className="text-red-800" href="#">
            BasicTheme
          </a>
          . All Rights Reserved
        </p>
        <img src="./src/assets/image/payment.png" alt="payment" />
      </footer>
    </>
  );
};
export default Footer;
