/** @jsx jsx */
import { css } from "@emotion/core";

export const nav_menu_css = css`
  .navbar {
    padding: 0.2rem 1rem;
  }
  nav {
    background-image: linear-gradient(#16a085, #0b9876),
      linear-gradient(#16a085, #0b9876);
    background-repeat: no-repeat;
    transition: top 0.3s;
    padding: ;
  }
  .bm-item-list {
    background-image: none;
    background-repeat: no-repeat;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
    font-weight: 600;
    margin-top: 0.2rem;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: #fcaf01;
  }

  .active {
    color: #fcaf01 !important;
  }
  .ab-default-btn {
    border: 1px solid #fdb001;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    padding: 9px 30px;
    text-decoration: none;
    display: inline-block;
    color: #ffffff;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fdb001),
      to(#e7940c)
    );
    background-image: -webkit-linear-gradient(top, #fdb001, #e7940c);
    background-image: -moz-linear-gradient(top, #fdb001, #e7940c);
    background-image: -ms-linear-gradient(top, #fdb001, #e7940c);
    background-image: -o-linear-gradient(top, #fdb001, #e7940c);
    background-image: linear-gradient(to bottom, #fdb001, #e7940c);
    -webkit-transition: all 1s ease-out;
    -moz-transition: all 1s ease-out;
    -ms-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    transition: all 1s ease-out;
  }
  .ab-default-btn:hover,
  .ab-default-btn:focus {
    outline: none;
    color: #ffffff;
    border: 1px solid #e7940c;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#e7940c),
      to(#fdb001)
    );
    background-image: -webkit-linear-gradient(top, #e7940c, #fdb001);
    background-image: -moz-linear-gradient(top, #e7940c, #fdb001);
    background-image: -ms-linear-gradient(top, #e7940c, #fdb001);
    background-image: -o-linear-gradient(top, #e7940c, #fdb001);
    background-image: linear-gradient(to bottom, #e7940c, #fdb001);
  }
  .nav-link {
    margin: 0px 5px;
  }
  .nav-link svg {
    margin-bottom: 3px;
    font-size: 16px;
  }
  .bm-item-list a {
    display: block;
    padding: 10px 0px;
    border-bottom: 1px solid #777777;
    color: #c1c1c1;
  }
  .bm-item-list a:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .navbar-brand a img {
    max-width: 200px;
    height: auto;
  }
  .sidebar-btn {
    padding: 0.3rem 0.6rem;
  }
  .play_btn {
    position: absolute;
    bottom: 60px;
  }
  @media only screen and (max-width: 990px) {
    .navbar-brand a img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const sidebarStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },

  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "#424e4e",
    padding: "1.5em 0.5em 0",
    fontSize: "1.15em",
  },

  bmItemList: {
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    color: "#afb7ad",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};
