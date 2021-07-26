/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import { footer_css } from "./styles";

export default function Footer() {
  return (
    <footer css={footer_css} className="d-none d-md-block">
      <div className="footer-area-top s-space-equal d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer-box">
                <h3 className="title-medium-light title-bar-left size-lg">
                  About us
                </h3>
                <ul className="useful-link">
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Career</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer-box">
                <h3 className="title-medium-light title-bar-left size-lg">
                  How to sell fast
                </h3>
                <ul className="useful-link">
                  <li>
                    <a href="/">How to sell fast</a>
                  </li>
                  <li>
                    <a href="/">Buy Now on classNameipost</a>
                  </li>
                  <li>
                    <a href="/">Membership</a>
                  </li>
                  <li>
                    <a href="/">Banner Advertising</a>
                  </li>
                  <li>
                    <a href="/">Promote your ad</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer-box">
                <h3 className="title-medium-light title-bar-left size-lg">
                  Help &amp; Support
                </h3>
                <ul className="useful-link">
                  <li>
                    <a href="/">Live Chat</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Stay safe on classNameipost</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer-box">
                <h3 className="title-medium-light title-bar-left size-lg">
                  Follow Us On
                </h3>
                <ul className="folow-us">
                  <li>
                    <a href="/">
                      <img src="/img/footer/follow1.jpg" alt="follow" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="/img/footer/follow2.jpg" alt="follow" />
                    </a>
                  </li>
                </ul>
                <ul className="social-link">
                  <li className="fa-classNameipost">
                    <a href="/">
                      <img src="/img/footer/facebook.jpg" alt="social" />
                    </a>
                  </li>
                  <li className="tw-classNameipost">
                    <a href="/">
                      <img src="/img/footer/twitter.jpg" alt="social" />
                    </a>
                  </li>
                  <li className="yo-classNameipost">
                    <a href="/">
                      <img src="/img/footer/youtube.jpg" alt="social" />
                    </a>
                  </li>
                  <li className="pi-classNameipost">
                    <a href="/">
                      <img src="/img/footer/pinterest.jpg" alt="social" />
                    </a>
                  </li>
                  <li className="li-classNameipost">
                    <a href="/">
                      <img src="/img/footer/linkedin.jpg" alt="social" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col text-center-mb">
              <p>&copy; {new Date().getFullYear()} Adbazar.net</p>
            </div>
            <div className="col text-right text-center-mb">
              <ul>
                <li>
                  <img src="/img/footer/follow1.jpg" alt="card" width="150" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
