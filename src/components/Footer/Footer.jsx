import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer w-full flex justify-between gap-4 bg-black  sm:footer-horizontal  p-10 md:p-20">
        <aside className="w-[25%] text-white ">
          <h1 className="text-2xl">CS — Ticket System</h1>
          <p className="opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </aside>

        <nav className="text-white">
          <h6 className="footer-title opacity-100">Company</h6>
          <a className="link link-hover opacity-60 my-2">About Us</a>
          <a className="link link-hover opacity-60">Our Mission</a>
          <a className="link link-hover opacity-60 my-2">Contact Saled</a>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title opacity-100">Services</h6>
          <a className="link link-hover opacity-60 my-2">Products & Services</a>
          <a className="link link-hover opacity-60">Customer Stories</a>
          <a className="link link-hover opacity-60 my-2">Download Apps</a>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title opacity-100">Information</h6>
          <a className="link link-hover opacity-60 my-2">Privacy Policy</a>
          <a className="link link-hover opacity-60">Terms & Conditions</a>
          <a className="link link-hover opacity-60 my-2">Join Us</a>
        </nav>

        <nav className="text-white ">
          <h6 className="footer-title opacity-100">Social Links</h6>

          <a className="link link-hover  my-2">
            <span className="mr-2 text-sm rounded-full text-black bg-white p-1">
              <FontAwesomeIcon icon={faXTwitter} />
            </span>
            <span className="opacity-60">@CS — Ticket System</span>
          </a>
          <a className="link link-hover  my-2">
            <span className="mr-2 text-sm rounded-full text-black bg-white p-1">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            <span className="opacity-60">@CS — Ticket System</span>
          </a>
          <a className="link link-hover  my-2">
            <span className="mr-2 text-sm rounded-full text-black bg-white p-1">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="opacity-60">@CS — Ticket System</span>
          </a>
          <a className="link link-hover  my-2">
            <span className="mr-2 text-sm rounded-full text-black bg-white p-1">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="opacity-60">support@cst.com</span>
          </a>
        </nav>
      </footer>

      <div className=" bg-neutral text-neutral-content items-center  px-20">
        <nav className="text-center  border-t-[0.5px] border-gray-700 py-10">
          <a>© 2025 CS — Ticket System. All rights reserved.</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
