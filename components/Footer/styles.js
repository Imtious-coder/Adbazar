/** @jsx jsx */
import { css } from "@emotion/core";

export const footer_css = css`
  .footer-area-top {
    background: #1a1c1d;
  }
  .footer-area-top .footer-box ul.useful-link li {
    font-size: 15px;
    margin-bottom: 15px;
  }
  .footer-area-top .footer-box ul.useful-link li:last-child {
    margin-bottom: 0;
  }
  .footer-area-top .footer-box ul.useful-link li a {
    color: #b7c3c8;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .footer-area-top .footer-box ul.useful-link li a:hover {
    color: #139e81;
  }
  .footer-area-top .footer-box ul.folow-us {
    margin-bottom: 35px;
  }
  .footer-area-top .footer-box ul.folow-us li {
    margin-bottom: 12px;
  }
  .footer-area-top .footer-box ul.folow-us li a {
    display: inline-block;
  }
  .footer-area-top .footer-box ul.folow-us li a img {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
  }
  .footer-area-top .footer-box ul.social-link li {
    text-align: center;
    display: inline-block;
  }
  .footer-area-top .footer-box ul.social-link .fa-classipost a {
    height: 30px;
    width: 30px;
    display: inline-block;
    color: #ffffff;
    background-color: #3b5998;
  }
  .footer-area-bottom {
    background: #111212;
    padding: 20px 0 0px;
  }
  .footer-area-bottom p {
    font-family: "Roboto", sans-serif;
    color: #919699;
    font-weight: 300;
    font-size: 15px;
  }
  .footer-area-bottom ul li {
    display: inline-block;
  }
`;
