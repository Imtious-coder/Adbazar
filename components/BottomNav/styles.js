/** @jsx jsx */
import { css } from "@emotion/core";

export const bottom_menu_css = css`
  .mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    will-change: transform;
    transform: translateZ(0);
    display: flex;
    height: 50px;
    box-shadow: 0 -2px 5px -2px #333;
    background-color: #fff;
  }
  .mobile-bottom-nav__item {
    flex-grow: 1;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40px;
  }

  .mobile-bottom-nav__item-content {
    display: flex;
    color: #555;
    flex-direction: column;
  }
  .mobile-bottom-nav__item-content a {
    color: #ccc;
  }

  .active {
    color: #ff0000;
  }

  .fab {
    border-radius: 50%;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-weight: bold;
    font-size: 22px;
    color: #fff;
    position: relative;
    justify-content: center;
    transform: translate(10%, -30%);
    border: 2px solid #fff;
    box-shadow: 0 5px 10px 2px #c1c1c1;
  }
  .ml-minus-10 {
    margin-left: -10px;
  }
`;
