import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const Transition = { duration: 3, type: "spring" };

  return (
    <div className={css.container}>
      {/*left side    */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection creams</span>

        <div className={css.text2}>
          <span>Trendy Collections</span>
          <span>
            Seedly say has suitable disposal and boy.Exercise joy man chi
            rejoiced
          </span>
        </div>
      </div>
      {/* middle side hero image */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={Transition}
        ></motion.div>

        <motion.img
          transition={Transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width="600"
        />

        <motion.div
          initial={{ right: "-3rem" }}
          whileInView={{ right: "-1.7rem" }}
          transition={Transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/*Right side */}

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
