/** @jsx jsx */
import { css } from "@emotion/core";

export const process_area_css = css`
  .process-area li {
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    display: inline-block;
    width: 33%;
  }
  .process-area li img {
    margin: 0 auto 30px;
  }
  .process-area li:before {
    content: url("../../assets/img/process-dot.png");
    position: absolute;
    right: -100px;
    top: 65px;
    z-index: 3;
  }
  .process-area li:last-child:before {
    display: none;
  }
  .process-area li h3 {
    font-size: 22px;
    color: #139e81;
    font-weight: 500;
    text-transform: capitalize;
  }
  .process-area li p {
    font-size: 15px;
    margin-bottom: 0;
  }
`;
