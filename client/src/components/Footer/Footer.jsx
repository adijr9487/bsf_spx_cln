import React from "react";
import logo from "../../Utility/Asset/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-black text-white">
      <div className="footer-top flex justify-center items-center ">
        <div className="w-24 h-px bg-white"></div>
        <div className="flex items-center justify-center p-8">
          <div className="head-logo">
            <img src={logo} style={{ width: "70px" }} alt="logo" />
          </div>
          <div className="social-links text-sm">
            <a target="_blank" href="https://twitter.com/SpaceX">Twitter</a>
            <a target="_blank" href="https://www.youtube.com/spacex">Youtube</a>
            <a target="_blank" href="https://www.instagram.com/spacex">Instagram</a>
            <a target="_blank" href="https://www.facebook.com/spacextechnologies">Facebook</a>
          </div>
        </div>
        <div className="w-24 h-px bg-white"></div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-menu flex text-neutral-400 pt-4 uppercase relative flex-wrap">
          <ul className="content mx-12">
            <li className="text-neutral-200 font-bold">Content</li>
            <li>Author</li>
            <li>Launch Pad</li>
            <li>Dragon</li>
            <li>Falcon</li>
            <li>Capsule</li>
          </ul>

          <ul className="tools mx-12">
            <li className="text-neutral-200 font-bold uppercase">Tools</li>
            <li>API</li>
            <li>Google Workspace</li>
          </ul>

          <ul className="help mx-12">
            <li className="text-neutral-200 font-bold uppercase">Help</li>
            <li>Support</li>
            <li>FAQs</li>
            <li>Learn More</li>
          </ul>

          <ul className="company mx-12">
            <li className="text-neutral-200 font-bold uppercase">Company</li>
            <li>About</li>
            <li>Our License</li>
            <li>Blog</li>
            <li>What's New</li>
          </ul>

          <ul className="handle mx-12">
            <li className="text-neutral-200 font-bold uppercase">Handle</li>
            <li><a target="_blank" href="https://twitter.com/SpaceX">Twitter</a></li>
            <li><a target="_blank" href="https://www.youtube.com/spacex">Youtube</a></li>
            <li><a target="_blank" href="https://www.instagram.com/spacex">Instagram</a></li>
            <li><a target="_blank" href="https://www.facebook.com/spacextechnologies">Facebook</a></li>
          </ul>

          <img
            className="logo absolute right-5 top-0"
            style={{ width: "50px" }}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="footer-bottom-copyright border-t-2 mx-12 py-4 mt-4 flex justify-between">
          <div className="text-neutral-500">
            <p>SPACEXCOMPANY</p>
            <p>
              COPYRIGHT @ 2010 - 2023 SPACEX COMPANY S.L. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
