import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "../icons/footer";
import { footerData } from "../config/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="main-footer-wrapper">
        <section className="footer-section-wrapper">
          <div className="footer-social-icons">
            <span className="font-bold ">Share:</span>
            <Link
              to={"https://twitter.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
            </Link>
            <Link
              to={"https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
            <Link
              to={"https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              to={"https://youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </Link>
          </div>
          <div className="footer-useful-links">
            <div id="footer-link-group-1">
              <ul>
                {footerData.slice(0, 2).map((data) => {
                  return (
                    <Link
                      to={data.link}
                      key={data.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li>{data.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div id="footer-link-group-2">
              <ul>
                {footerData.slice(3, 5).map((data) => {
                  return (
                    <Link to={data.link} key={data.id}>
                      <li>{data.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div id="footer-link-group-3">
              <ul>
                {footerData.slice(6, 8).map((data) => {
                  return (
                    <Link to={data.link} key={data.id}>
                      <li>{data.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div id="footer-link-group-4">
              <ul>
                {footerData.slice(9, 12).map((data) => {
                  return (
                    <Link
                      to={data.link}
                      key={data.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li>{data.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <span>© 2026 ATSFlix, Inc. All rights reserved.</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
