/** @jsx jsx */
import { css } from "@emotion/core";

export const pricing_css = css`
  .pricingTable {
    background: #fff;
    font-family: "Poppins", sans-serif;
    text-align: center;
    border: 4px solid #fff;
    border-radius: 25px;
    box-shadow: 5px -5px 10px 5px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;
  }
  .pricingTable:after {
    content: "";
    background: linear-gradient(#9b42c4, #6d3093);
    height: 150px;
    width: 100%;
    border-radius: 23px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  .pricingTable .pricingTable-header {
    font-family: "Teko", sans-serif;
    margin: 0 0 10px;
  }
  .pricingTable .title {
    color: transparent;
    background: linear-gradient(#9b42c4, #6d3093);
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pricingTable .pricing-content {
    padding: 0;
    margin: 0 0 10px;
    list-style: none;
  }
  .pricingTable .pricing-content li {
    color: #333;
    font-size: 15px;
  }
  .pricingTable .pricing-content li:last-child {
    margin-bottom: 0;
  }
  .pricingTable .price-value {
    color: #9b42c4;
    background: #fff;
    width: 100px;
    height: 100px;
    padding: 10px 0px 10px 0;
    margin: 0 auto 10px;
    border: 4px solid #9b42c4;
    box-shadow: 0 0 0 5px #fff inset, 0 0 0 7px #9b42c4 inset;
    border-radius: 50%;
  }
  .pricingTable .price-value .currency {
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    margin: 0 -5px 0 0;
    vertical-align: top;
    display: inline-block;
  }
  .pricingTable .price-value .amount {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -2px;
    display: inline-block;
    margin-left: 3px;
  }
  .pricingTable .price-value .duration {
    font-size: 13px;
    display: block;
  }
  .pricingTable .pricingTable-signup a {
    color: #80489f;
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    width: 100px;
    margin: 5px auto;
    border-radius: 5px;
    display: block;
    transition: all 0.3s ease 0s;
  }
  .pricingTable .pricingTable-signup a:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8) inset, 5px 5px 0 rgba(0, 0, 0, 0.5);
  }
  .pricingTable.orange .title {
    background: linear-gradient(#fc4a1a, #ce3610);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pricingTable.orange:after {
    background: linear-gradient(#fc4a1a, #ce3610);
  }
  .pricingTable.orange .price-value {
    color: #fc4a1a;
    border-color: #fc4a1a;
    box-shadow: 0 0 0 5px #fff inset, 0 0 0 7px #fc4a1a inset;
  }
  .pricingTable.orange .pricingTable-signup a {
    color: #fc4a1a;
  }
  .pricingTable.green .title {
    background: linear-gradient(#42a147, #46a04e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pricingTable.green:after {
    background: linear-gradient(#42a147, #46a04e);
  }
  .pricingTable.green .price-value {
    color: #42a147;
    border-color: #42a147;
    box-shadow: 0 0 0 5px #fff inset, 0 0 0 7px #42a147 inset;
  }
  .pricingTable.green .pricingTable-signup a {
    color: #42a147;
  }

  .pricingTable.teal .title {
    background: linear-gradient(#29958f, #027d78);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pricingTable.teal:after {
    background: linear-gradient(#29958f, #027d78);
  }
  .pricingTable.teal .price-value {
    color: #29958f;
    border-color: #29958f;
    box-shadow: 0 0 0 5px #fff inset, 0 0 0 7px #29958f inset;
  }
  .pricingTable.teal .pricingTable-signup a {
    color: #29958f;
  }
  @media only screen and (max-width: 990px) {
    .pricingTable {
      margin-bottom: 40px;
    }
  }
`;
