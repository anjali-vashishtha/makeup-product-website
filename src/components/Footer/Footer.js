import React from "react";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando,FL 3280</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:234-456-789">234-456-789</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon}></InboxIcon>
              <a href="email:abc@gmail.com">abc@gmail.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon}></LoginIcon>
              Sign in
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon}></UsersIcon>
              <a href="./about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon}></LinkIcon>
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
          </div>
          <div className={css.copyRight}>
              <span>Copyright @2022 by Amzon</span>
              <span>All rights reserved</span>
          </div>
    </div>
  );
};
export default Footer;
