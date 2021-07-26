/** @jsx jsx */
import { css } from "@emotion/core";

export const top_category_css = css`
  .service-box1 {
    -webkit-box-shadow: 0px 1px 2px 0px rgba(205, 214, 222, 0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(205, 214, 222, 0.75);
    box-shadow: 0px 1px 2px 0px rgba(205, 214, 222, 0.75);
    padding: 40px 20px 15px;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .service-box1 img {
    margin: 0 auto 20px;
  }
  .service-box1 .view {
    color: #989898;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    margin-bottom: 20px;
  }
  .service-box1:hover {
    -webkit-box-shadow: 0px 16px 20px 0px rgba(216, 216, 216, 0.75);
    -moz-box-shadow: 0px 16px 20px 0px rgba(216, 216, 216, 0.75);
    box-shadow: 0px 16px 20px 0px rgba(216, 216, 216, 0.75);
  }
  .service-box1 h3:hover a {
    color: #139e81;
  }
`;
