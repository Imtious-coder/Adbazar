/** @jsx jsx */
import { css } from "@emotion/core";

export const pricing_area_css = css`
  .pricing-box {
    padding: 60px 50px;
    text-align: center;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(206, 206, 206, 0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(206, 206, 206, 0.75);
    box-shadow: 0px 1px 2px 0px rgba(206, 206, 206, 0.75);
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .pricing-box .plan-title {
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 5px;
    color: #222222;
    font-family: "Roboto", sans-serif;
  }
  .pricing-box .price {
    font-family: "Roboto", sans-serif;
    font-size: 80px;
    color: #139e81;
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  .pricing-box .price .currency {
    position: relative;
    top: -42px;
    left: -20px;
    color: #222222;
    font-size: 20px;
    font-weight: 500;
    z-index: 1;
  }
  .pricing-box .price .duration {
    position: relative;
    bottom: 0;
    right: -10px;
    color: #222222;
    font-weight: 400;
    font-size: 14px;
  }
  .pricing-box h3 {
    margin-bottom: 15px;
  }
  .pricing-box p {
    margin-bottom: 35px;
  }
  .pricing-box:hover {
    -webkit-box-shadow: 0px 16px 20px 0px rgba(216, 216, 216, 0.75);
    -moz-box-shadow: 0px 16px 20px 0px rgba(216, 216, 216, 0.75);
    box-shadow: 0px 16px 20px 0px rgba(216, 216, 216, 0.75);
  }
  .other-option {
    margin: 30px auto;
    height: 120px;
    width: 120px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    color: #ffffff;
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    text-align: center;
    text-transform: uppercase;
    line-height: 4;
  }
`;
