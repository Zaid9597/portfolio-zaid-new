import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>zaidpatel9597@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/zaid_patel6899/">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/zaid.patel.5836711">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/zaid-parvej-p-b563a8132/">
          <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Zaid9597">
          <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;