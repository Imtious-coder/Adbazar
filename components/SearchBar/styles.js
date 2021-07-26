/** @jsx jsx */
import { css } from "@emotion/core";

export const searchbar_css = css`
  .searchbar {
    position: fixed;
    z-index: 100;
    width: 100vw;
    transition: top 0.3s;
  }
  .search-layout {
    padding: 7px 0px 6px 0px;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(217, 218, 218, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(217, 218, 218, 0.75);
    box-shadow: 0px 1px 5px 0px rgba(217, 218, 218, 0.75);
  }
  .search-input-area {
    margin-bottom: 0;
  }
  .search-input-area input {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
    border-radius: 6px;
    padding: 2px 10px 5px 35px;
    width: 100%;
    height: 40px;
    border: 1px dashed #c8c8c8;
  }
  .search-input-area input:focus {
    border: 1px dashed #139e81;
    outline: none;
  }
  .input-icon-location {
    position: relative;
  }
  .input-icon-location:before {
    content: "\f041";
    position: absolute;
    left: 15px;
    top: 8px;
    z-index: 8;
    font-family: fontawesome;
    font-size: 16px;
    color: #139e81;
  }
  .input-icon-category {
    position: relative;
  }
  .input-icon-category:before {
    content: "\f0c9";
    position: absolute;
    left: 15px;
    top: 8px;
    z-index: 8;
    font-family: fontawesome;
    font-size: 16px;
    color: #139e81;
  }
  .input-icon-keywords {
    position: relative;
  }
  .input-icon-keywords:before {
    content: "\f035";
    position: absolute;
    left: 15px;
    top: 8px;
    z-index: 8;
    font-family: fontawesome;
    font-size: 16px;
    color: #139e81;
  }
`;
