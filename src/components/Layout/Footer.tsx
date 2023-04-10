import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer>
            {/* <img className="footer-logo" src="./images/logo-2.svg" alt=""> */}
            <div className="footer-socials">
                <a href="#"></a>
                <a href="https://www.facebook.com/codersgyan"></a>
                <a href="https://twitter.com/CoderGyan"></a>
                <a href="#"></a>
                <a href="https://www.instagram.com/codersgyan/"></a>
            </div>
            <div className="copyright">
                Copyright 2020
            </div>
        </footer>
    </div>
  );
};

export default Footer;
