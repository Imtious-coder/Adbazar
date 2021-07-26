/** @jsx jsx */
import { css } from "@emotion/core";

export const all_ads_css = css`
  .product-box {
    position: relative;
  }
  .img-thumb {
    width: 140px;
    height: 105px;
  }
  .item-content {
    margin-bottom: 10px;
  }
  .product-box .item-mask-wrapper {
    margin-bottom: 10px;
    border: 1px solid #d6d6d6;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
  }
  .product-box .item-mask {
    position: relative;
    text-align: center;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(202, 202, 202, 0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(202, 202, 202, 0.75);
    box-shadow: 0px 1px 2px 0px rgba(202, 202, 202, 0.75);
  }
  .product-box .item-mask img {
    display: inline-block;
  }
  .product-box .item-mask .trending-sign {
    display: none;
    cursor: pointer;
    top: 0;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 30px solid #139e81;
    border-right: 30px solid transparent;
    z-index: 10;
    left: 0;
  }
  .product-box .item-mask .trending-sign .icon {
    color: #ffffff;
    font-size: 14px;
    bottom: 13px;
    left: 3px;
    position: absolute;
  }
  .product-box .item-mask .trending-sign.active {
    display: block;
  }

  .membership-sign {
    color: #ffffff;
    bottom: 0px;
    right: 0px;
    position: absolute;
  }
  .membership-sign span {
    font-size: 10px;
    color: #fff;
  }
  .product-box .item-mask .title-ctg {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 3;
    background-color: #fcaf01;
    padding: 4px 15px;
    color: #ffffff;
    font-size: 12px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 1px 0px #bc8200;
    -moz-box-shadow: 0px 1px 1px 0px #bc8200;
    box-shadow: 0px 1px 1px 0px #bc8200;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }

  .product-box .item-mask .info-link {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%;
    z-index: 9;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .product-box .item-mask .info-link li {
    margin-right: 5px;
    display: inline-block;
  }
  .product-box .item-mask .info-link li a {
    line-height: 3.6;
    display: inline-block;
    color: #ffffff;
    height: 50px;
    width: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    background-color: #139e81;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .product-box .item-mask .info-link li a:hover {
    background-color: #ffffff;
    color: #139e81;
  }
  .product-box .item-mask .info-link li:last-child {
    margin-right: 0;
  }
  .product-box .item-mask .symbol-featured {
    display: none;
    position: absolute;
    top: -10px;
    left: -14px;
    z-index: 5;
  }
  .product-box .item-mask .symbol-featured.active {
    display: block;
  }
  .product-box .item-content .title-ctg {
    background-color: #fcaf01;
    padding: 4px 15px;
    color: #ffffff;
    font-size: 12px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 1px 0px #bc8200;
    -moz-box-shadow: 0px 1px 1px 0px #bc8200;
    box-shadow: 0px 1px 1px 0px #bc8200;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .product-box .item-content h3 {
    font-weight: 500;
    text-transform: capitalize;
    color: #222222;
    margin-bottom: 5px;
  }
  .product-box .item-content h3 a {
    color: #222222;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .product-box .item-content h3 a:hover {
    color: #139e81;
  }
  .product-box .item-content .upload-info {
    line-height: 1;
  }
  .product-box .item-content .upload-info li {
    display: inline-block;
    border-right: 2px solid #cccccc;
    margin-right: 8px;
    padding-right: 10px;
    line-height: 1;
  }
  .product-box .item-content .upload-info li:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }
  .product-box .item-content .upload-info li svg {
    color: #139e81;
    margin-right: 5px;
  }

  .product-box .item-content .price {
    position: absolute;
    bottom: -25px;
    left: 0px;
    color: orangered;
    font-size: 20px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
  }
  .product-box .item-content .time {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }
  .product-box .item-content a.product-details-btn {
    background-color: #fcaf01;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 700;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 1px 0px #bc8200;
    -moz-box-shadow: 0px 1px 1px 0px #bc8200;
    box-shadow: 0px 1px 1px 0px #bc8200;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .product-box .item-content a.product-details-btn:hover {
    background-color: #139e81;
    -webkit-box-shadow: 0px 1px 1px 0px #024f3f;
    -moz-box-shadow: 0px 1px 1px 0px #024f3f;
    box-shadow: 0px 1px 1px 0px #024f3f;
  }
  .product-box .item-content p {
    color: #222222;
  }
  .product-box .item-content h3.long-title {
    display: none;
    width: 90%;
  }
  .product-box:hover .item-mask:before {
    opacity: 1;
    visibility: visible;
  }
  .product-box:hover .info-link {
    opacity: 1;
    visibility: visible;
  }
  .product-box:hover .title-ctg {
    top: 0;
    left: 0;
  }

  .related-image {
    margin: 0 auto;
    height: 100px;
  }

  @media only screen and (min-width: 991px) {
    .allpost-wrapper {
      padding-top: 50px;
    }
    .category-list-layout2 .row > [class^="col-"] {
      max-width: 100% !important;
      -webkit-box-flex: 100%;
      -ms-flex: 100%;
      flex: 100%;
    }
    .category-list-layout2 .row > [class^="col-"]:last-child .product-box {
      padding-bottom: 0;
      border-bottom: none;
      margin-bottom: 0;
    }
    .category-list-layout2 .product-box {
      padding-bottom: 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      border-bottom: 1px solid #cccccc;
    }
    .category-list-layout2 .product-box .item-mask .title-ctg {
      display: none;
    }
    .category-list-layout2 .product-box .item-mask .info-link li {
      margin-right: 1px;
    }
    .category-list-layout2 .product-box .item-mask .info-link li a {
      height: 38px;
      width: 38px;
      line-height: 2.8;
    }
    .category-list-layout2
      .product-box
      .item-mask
      .info-link
      li:nth-of-type(2n) {
      display: none;
    }
    .category-list-layout2 .product-box .item-mask-wrapper {
      display: inline-block;
      min-width: 120px;
      max-width: 120px;
      margin-right: 30px;
      margin-bottom: 0;
    }
    .category-list-layout2 .product-box .item-content {
      padding-right: 15%;
    }
    .category-list-layout2 .product-box .item-content .title-ctg {
      display: none;
    }
    .category-list-layout2 .product-box .item-content .upload-info {
      margin-bottom: 15px;
    }
    .category-list-layout2 .product-box .item-content .price {
      position: inherit;
    }
    .category-list-layout2 .product-box .item-content a.product-details-btn {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;
    }
    .category-list-layout2 .product-box .item-content p {
      display: none;
    }

    .category-list-layout2 .product-box .item-content h3 {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
    .zoom-gallery {
      max-height: 1235px;
      overflow-y: scroll;
    }
  }

  @media only screen and (max-width: 990px) {
    .slider-img {
      height: 400px;
    }
    .product-box .item-mask .trending-sign {
      display: none;
      cursor: pointer;
      top: 0;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 30px solid #139e81;
      border-right: 30px solid transparent;
      z-index: 10;
      left: 0;
    }
    .product-box .item-mask .trending-sign .icon {
      color: #ffffff;
      font-size: 14px;
      bottom: 13px;
      left: 3px;
      position: absolute;
    }
    .img-thumb {
      width: 100%;
      height: 150px;
    }
    .allpost-wrapper {
      padding-top: 95px;
    }
    .rp-padding:nth-of-type(2n + 1) {
      padding-right: 5px !important;
    }
    .rp-padding:nth-of-type(2n) {
      padding-left: 5px !important;
    }
    .item-content {
      padding: 0px;
    }

    .product-box {
      margin-bottom: 30px;
    }
    .bid-btn {
      position: absolute;
      padding: 0px 1px;
      bottom: -25px;
      left: 0px;
    }

    .category-grid-layout1 .product-box .item-content .title-ctg {
      display: none;
    }
    .category-grid-layout1 .product-box .item-content .upload-info li {
      border-right: none;
    }
    .category-grid-layout1 .product-box .item-content .upload-info .date {
      display: none;
    }
    .category-grid-layout1 .product-box .item-content .upload-info .tag-ctg {
      display: none;
    }
    .category-grid-layout1 .product-box .item-content a.product-details-btn {
      display: none;
    }
    .category-grid-layout1 .product-box .item-content p {
      display: none;
    }
    .category-grid-layout1 .product-box .item-content h3 {
      display: block;
      margin-bottom: 5px;
    }
    .category-grid-layout1 .product-box .item-content .time {
      bottom: -25px;
      right: 10px;
    }
    .place {
      font-size: 13px;
    }
  }

  body > .fox-tooltip {
    font-size: 100%;
    position: absolute;
    z-index: 9999;
    -o-box-shadow: 0 0 5px #aaa;
    -moz-box-shadow: 0 0 5px #aaa;
    -webkit-box-shadow: 0 0 5px #aaa;
    box-shadow: 0 0 5px #aaa;
    color: #fff;
    border-radius: 3px;
    background: #666;
    padding: 2px 10px;
    border-width: 2px;
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
  }
  body > .fox-tooltip,
  body > .fox-tooltip .fox-tooltip-bottom:after {
    background: #139e81;
    border-radius: 2px;
  }
  body > .fox-tooltip .fox-tooltip-bottom {
    width: 70px;
    height: 18px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    bottom: -16px;
  }
  body > .fox-tooltip .fox-tooltip-bottom:after {
    content: "";
    position: absolute;
    left: 20px;
    top: -20px;
    width: 25px;
    height: 25px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .layout-switcher {
    position: relative;
    z-index: 8;
    float: right;
    top: 2px;
  }
  .layout-switcher ul > li {
    margin-right: 30px;
    display: inline-block;
  }
  .layout-switcher ul > li:hover a i {
    color: #139e81;
  }
  .layout-switcher ul > li > a {
    display: block;
    position: relative;
  }
  .layout-switcher ul > li > a > i {
    position: absolute;
    top: -12px;
    left: -20px;
    color: #989898;
    font-size: 18px;
  }
  .layout-switcher ul > li:last-child {
    margin-right: 0;
  }
  .layout-switcher ul > .active i {
    color: #139e81;
  }
  .page-controls-sorting button {
    cursor: pointer;
    padding: 0 12px;
    background-color: transparent;
    outline: none;
    border: none;
  }
  .page-controls-sorting button i {
    margin-left: 15px;
  }
  .page-controls-sorting button:focus,
  .page-controls-sorting button:hover {
    outline: none;
    border: none;
    box-shadow: none;
  }
  .page-controls-sorting button:active {
    box-shadow: none;
  }
  .page-controls-sorting button.dropdown-toggle::after {
    opacity: 0;
  }
  .page-controls-sorting .dropdown-menu {
    display: inherit;
    visibility: hidden;
    opacity: 0;
    top: 12px !important;
    left: 14px !important;
    padding: 0;
    border-radius: 0;
    transition: all 0.5s ease-out;
  }
  .page-controls-sorting .dropdown-menu a {
    margin-right: 0;
    display: inherit;
    padding: 10px 15px;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .page-controls-sorting .dropdown-menu a:focus,
  .page-controls-sorting .dropdown-menu a:hover {
    outline: none;
    background-color: #139e81 !important;
    color: #ffffff !important;
  }
  .page-controls-sorting .dropdown-toggle i:after {
    display: none;
  }
  .page-controls-sorting.show > .dropdown-menu.show {
    visibility: visible;
    opacity: 1;
    transform: inherit;
  }
  img.mfp-img {
    background-color: #f6f6f6;
  }
  .mfp-image-holder .mfp-close,
  .mfp-iframe-holder .mfp-close {
    right: 0;
    color: #222222;
  }
  .mfp-title {
    padding-left: 15px;
    color: #222222;
    font-weight: 700;
    font-size: 18px;
  }
  .mfp-counter {
    right: 10px;
    color: #222222;
    font-weight: 700;
    font-size: 16px;
  }
  h3 {
    font-size: 18px;
  }
`;

export const ad_details_css = css`
  .carousel .slide img {
    width: auto;
    height: 350px;
  }
  .price {
    color: orangered;
    font-size: 16px;
    font-weight: 700;
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: transparent;
  }
  .blink_me {
    animation: blinker 1s linear infinite;
  }

  .ad-details {
    font-size: 15px;
    white-space: pre-wrap;
    font-family: sans-serif;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  .item-actions li {
    margin-right: 30px;
    display: inline-block;
  }
  @media only screen and (max-width: 575px) {
    .item-actions li:last-child {
      margin-bottom: 0;
    }
  }
  .item-actions li a {
    color: #646464;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .item-actions li a i {
    margin-right: 10px;
    color: #b8b8b8;
  }
  .item-actions li a:hover {
    color: #fcaf01;
  }
  .item-actions li:last-child {
    margin-right: 0;
  }
  .item-danger i {
    color: #ff1744;
  }
  h4 {
    font-size: 14px !important;
  }
  h5 {
    font-size: 16px;
  }
  .carousel .slide {
    background: #fff;
  }
  .carousel .control-next.control-arrow::before {
    border-left: 8px solid #222;
  }
  .carousel .control-prev.control-arrow::before {
    border-right: 8px solid #222;
  }
  ul.specification-layout1:after {
    clear: both;
    content: "";
    display: block;
  }
  ul.specification-layout1 > li {
    width: 49%;
    box-sizing: border-box;
    padding-left: 30px;
    position: relative;
    margin-bottom: 10px;
    margin-right: 5px;
    float: left;
    font-size: 15px;
  }

  @media only screen and (max-width: 991px) {
    ul.specification-layout1 > li {
      width: 100%;
    }
    .reduce-padding {
      padding: 10px 10px 20px !important;
    }

    .carousel .slide img {
      width: auto;
      height: 240px;
    }
  }
  ul.specification-layout1 > li:before {
    text-align: center;
    content: "\f105";
    height: 16px;
    width: 16px;
    position: absolute;
    font-family: FontAwesome;
    left: 0;
    top: 3px;
    border-radius: 50%;
    z-index: 1;
    line-height: 1.2;
    color: #ffffff;
    background-color: #fcaf01;
  }
`;

export const image_upload_css = css`
  .image-item {
    display: flex;
    margin: 10px 0;
  }
  .image-item__btn-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .uploader-btn {
    background-color: #e3e0d8;
    padding: 20px 0px;
    border: 2px dashed #777777;
    &:hover {
      background-color: #cfccc4;
      border: 2px dashed #139e81;
    }
  }
`;
