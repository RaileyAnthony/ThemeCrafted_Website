import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="desc">
          <div className="logo">
            <img className="logoImg" src={logo} alt="" />
            <h2 className="logoText">ThemeCrafted</h2>
          </div>
          <p>
            ThemeCrafted is a curated digital marketplace for high-quality
            website and app themes. Whether you're a developer, designer, or
            entrepreneur, find beautifully designed, performance-optimized
            templates crafted to bring your vision to life.
          </p>
          <p>Made by CCBoyz | © 2025 ThemeCrafted. All rights reserved.</p>
        </div>

        <div className="links">
          <div className="pages">
            <h4>Pages</h4>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/collections">
              Collections
            </Link>
            <Link className="link" to="/gigs">
              Discover
            </Link>
          </div>

          <div className="resources">
            <h4>Resources</h4>
            <a
              className="link"
              href="https://www.figma.com/design/xzl4gtkb1025hlwbIynviR/ThemeCrafted-Website?node-id=0-1&t=feEprvYSDKVC1Kpi-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prototype
            </a>
            <a
              className="link"
              href="https://github.com/RaileyAnthony/themecrafted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>

          <div className="socials">
            <h4>Socials</h4>
            <a
              className="link"
              href="https://www.instagram.com/theme.crafted/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="link"
              href="https://www.facebook.com/profile.php?id=61576183454191"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
