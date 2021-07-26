/** @jsx jsx */
import { css } from "@emotion/core";

export const dashboard_css = css`
  .my-account-title {
    border: 1px solid #d7d7d7;
    background: #ffffff;
    display: inherit;
  }
  .my-account-title li {
    border-bottom: 1px solid #d7d7d7;
  }
  .my-account-title li:last-child {
    border-bottom: none;
  }
  .my-account-title li a {
    padding: 10px 10px 10px 30px;
    position: relative;
    display: block;
    color: #707070;
    font-size: 14px;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .my-account-title li a:before {
    content: "\f105";
    font-family: FontAwesome;
    font-size: 14px;
    color: #444444;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 1;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .my-account-title a.active {
    color: #37474f;
  }
  .my-account-title a.active:before {
    color: #139e81;
  }
  .my-account-title a.active:after {
    background: #139e81;
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: -1px;
    left: 0;
    right: 0;
    margin: 0 auto;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .my-account-wrapper .personal-info .control-label {
    text-align: left;
    color: #444444;
    font-weight: 400;
  }
  .my-account-wrapper .personal-info .form-control {
    height: 40px;
    background: #f9f9f9;
    border: 1px solid #dcdcdc;
    box-shadow: none;
  }
  .my-account-wrapper .personal-info .form-control:focus {
    box-shadow: none;
  }
  .my-account-wrapper .public-profile .public-profile-item {
    margin-bottom: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-title {
    margin-right: 10px;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -moz-flex: 2;
    flex: 2;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-title
    h4 {
    font-size: 15px;
    color: #444444;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content {
    -webkit-box-flex: 7;
    -webkit-flex: 7;
    -moz-flex: 7;
    flex: 7;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    img {
    margin-bottom: 15px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .file-title {
    color: #444444;
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
    font-weight: 500;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .file-size {
    font-size: 12px;
    color: #707070;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio {
    padding-left: 20px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    label {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-left: 5px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    label::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 17px;
    height: 17px;
    left: 0;
    margin-left: -20px;
    border: 1px solid #cccccc;
    border-radius: 50%;
    background-color: #fff;
    -webkit-transition: border 0.15s ease-in-out;
    -o-transition: border 0.15s ease-in-out;
    transition: border 0.15s ease-in-out;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    label::after {
    display: inline-block;
    position: absolute;
    content: " ";
    width: 11px;
    height: 11px;
    left: 3px;
    top: 3px;
    margin-left: -20px;
    border-radius: 50%;
    background-color: #555555;
    -webkit-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
    -webkit-transition: -webkit-transform 0.1s
      cubic-bezier(0.8, -0.33, 0.2, 1.33);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);
    -o-transition: -o-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);
    transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    input[type="radio"]:focus
    + label::before {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    input[type="radio"]:checked
    + label::after {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    input[type="radio"]:disabled {
    cursor: not-allowed;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    input[type="radio"]:disabled
    + label {
    opacity: 0.65;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio
    input[type="radio"]:disabled
    + label::before {
    cursor: not-allowed;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .radio.radio-inline {
    margin-top: 0;
    margin-right: 10px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .profile-heading {
    background: #f9f9f9;
    border: 1px solid #dcdcdc;
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .html-format {
    margin-top: 30px;
  }
  .my-account-wrapper
    .public-profile
    .public-profile-item
    .public-profile-content
    .html-format
    li {
    font-size: 12px;
    color: #707070;
  }
  .my-account-wrapper .title-section {
    font-size: 24px;
    background: #ffffff;
    color: #263238;
    font-weight: 700;
    text-align: left;
    border-bottom: 1px solid #d7d7d7;
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .my-account-wrapper .title-section {
      font-size: 24px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .my-account-wrapper .title-section {
      font-size: 24px;
    }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    .my-account-wrapper .title-section {
      font-size: 22px;
      padding: 15px 30px;
    }
  }
  @media (min-width: 321px) and (max-width: 479px) {
    .my-account-wrapper .title-section {
      font-size: 20px;
      padding: 15px 20px;
    }
  }
  @media only screen and (max-width: 320px) {
    .my-account-wrapper .title-section {
      font-size: 20px;
      padding: 15px;
    }
  }
  .my-account-wrapper .file-upload-area {
    margin-bottom: 15px;
    padding: 8px;
    border: 1px solid #dcdcdc;
    background: #f9f9f9;
    color: #707070;
  }
  .my-account-wrapper .file-upload-area a {
    margin-right: 15px;
    padding: 5px 10px;
    color: #444444;
    background: #ffffff;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .my-account-wrapper .file-upload-area a:hover {
    -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;
