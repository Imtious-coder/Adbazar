/** @jsx jsx */
import { css } from "@emotion/core";

export const sidebar_css = css`
  .sidebar-item-box {
    margin-bottom: 10px;
  }
  .sidebar-item-box:last-child {
    margin-bottom: 0;
  }
  ul.sidebar-category-list li {
    position: relative;
    text-transform: capitalize;
    border-bottom: 1px solid #cccccc;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-category-list li:last-child {
    border-bottom: 0;
  }
  ul.sidebar-category-list li span {
    position: absolute;
    right: 20px;
    z-index: 1;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%;
  }
  ul.sidebar-category-list li a {
    width: 100%;
    display: inline-block;
    padding: 5px 5px;
    padding-right: 0px;
    color: #444444;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    font-size: 15px;
  }
  ul.sidebar-category-list li a img {
    margin-right: 5px;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  ul.sidebar-category-list li:hover {
    background: #139e81;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }

  ul.sidebar-category-list li:hover a {
    color: #ffffff;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-loacation-list {
    padding: 10px 0 10px;
  }
  ul.sidebar-loacation-list li {
    position: relative;
    text-transform: capitalize;
  }

  ul.sidebar-loacation-list li a {
    display: block;
    color: #646464;
    padding: 5px 5px;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    font-size: 15px;
  }
  ul.sidebar-loacation-list li:hover a {
    color: #139e81;
  }
  ul.sidebar-safety-tips {
    padding: 15px 0 20px;
  }
  ul.sidebar-safety-tips li {
    display: block;
    padding: 10px 15px 10px 40px;
    position: relative;
  }
  ul.sidebar-safety-tips li:before {
    content: "\f105";
    position: absolute;
    left: 25px;
    top: 12px;
    color: #139e81;
    font-family: fontawesome;
    z-index: 3;
  }
  ul.sidebar-sell-quickly {
    padding: 15px 0 20px;
  }
  ul.sidebar-sell-quickly li {
    display: block;
    padding: 10px 15px 10px 40px;
    position: relative;
  }
  ul.sidebar-sell-quickly li a {
    color: #646464;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-sell-quickly li a:hover {
    color: #139e81;
  }
  ul.sidebar-sell-quickly li:before {
    content: "\f105";
    position: absolute;
    left: 25px;
    top: 12px;
    color: #139e81;
    font-family: fontawesome;
    z-index: 3;
  }
  ul.sidebar-item-details {
    padding: 20px 25px 25px;
  }
  ul.sidebar-item-details > li {
    color: #222222;
    font-weight: 600;
    margin-bottom: 18px;
  }
  ul.sidebar-item-details > li:last-child {
    margin-bottom: 0;
  }
  ul.sidebar-item-details > li span {
    margin-left: 10px;
    color: #646464;
    font-weight: 400;
  }
  ul.sidebar-item-details > li ul.sidebar-social li {
    margin-right: 10px;
    display: inline-block;
  }
  ul.sidebar-item-details > li ul.sidebar-social li:last-child {
    margin-right: 0;
  }
  ul.sidebar-item-details > li ul.sidebar-social li a {
    padding: 5px;
    color: #646464;
    font-weight: 400;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-item-details > li ul.sidebar-social li a:hover {
    color: #139e81;
  }
  ul.sidebar-seller-information li {
    border-bottom: 1px solid #cccccc;
    padding: 20px;
  }
  ul.sidebar-seller-information li:last-child {
    border-bottom: none;
  }
  ul.sidebar-seller-information li img {
    margin-right: 10px;
    margin-top: 3px;
  }
  ul.sidebar-seller-information li span {
    color: #969696;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
  ul.sidebar-seller-information li h4 {
    margin-bottom: 0;
  }
  ul.sidebar-more-option li {
    -webkit-box-shadow: 0px 1px 2px 0px rgba(205, 205, 205, 0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(205, 205, 205, 0.75);
    box-shadow: 0px 1px 2px 0px rgba(205, 205, 205, 0.75);
    background-color: #ffffff;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    margin-bottom: 15px;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-more-option li:last-child {
    margin-bottom: 0;
  }
  ul.sidebar-more-option li a {
    display: block;
    padding: 16px 15px;
    color: #222222;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-more-option li a img {
    display: inline-block;
    border-right: 1px solid #cdcdcd;
    padding-right: 15px;
    margin-right: 15px;
  }
  ul.sidebar-more-option li:hover {
    background-color: #139e81;
  }
  ul.sidebar-more-option li:hover a {
    color: #ffffff;
  }
  ul.sidebar-ads-from-user {
    padding: 15px 15px 20px 20px;
  }
  ul.sidebar-ads-from-user li {
    margin-bottom: 15px;
  }
  ul.sidebar-ads-from-user li:last-child {
    margin-bottom: 0;
  }
  ul.sidebar-ads-from-user li .media > a {
    margin-top: 5px;
    margin-right: 15px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #cccccc;
    padding: 4px;
  }
  ul.sidebar-ads-from-user li .media > a:hover img {
    opacity: 0.8;
  }
  ul.sidebar-ads-from-user li .media > a img {
    background: #f6f6f6;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-ads-from-user li h4 {
    font-size: 17px;
    text-transform: capitalize;
    margin-bottom: 0;
  }
  ul.sidebar-ads-from-user li h4 a {
    color: #222222;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  ul.sidebar-ads-from-user li h4 a:hover {
    color: #139e81;
  }
  ul.sidebar-ads-from-user li .place {
    margin-bottom: 5px;
  }
  ul.sidebar-ads-from-user li .place i {
    color: #139e81;
    margin-right: 10px;
  }
  ul.sidebar-ads-from-user li .price {
    font-size: 18px;
    color: #222222;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .text-forest {
    color: #139e81;
  }
`;
