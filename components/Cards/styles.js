/** @jsx jsx */
import { css } from "@emotion/core";

export const card_css = css`
  .card-counter {
    box-shadow: 2px 2px 10px #dadada;
    margin: 5px;
    padding: 20px 10px;
    background-color: #fff;
    height: 100px;
    border-radius: 5px;
    transition: 0.3s linear all;
  }

  .card-counter:hover {
    box-shadow: 4px 4px 20px #dadada;
    transition: 0.3s linear all;
  }

  .card-counter.primary {
    background-color: #007bff;
    color: #fff;
  }

  .card-counter.danger {
    background-color: #ef5350;
    color: #fff;
  }

  .card-counter.success {
    background-color: #139e81;
    color: #fff;
  }

  .card-counter.info {
    background-color: #26c6da;
    color: #fff;
  }
  .card-counter.warning {
    background-color: #e99529;
    color: #fff;
  }

  .card-counter svg {
    font-size: 5em;
    opacity: 0.2;
  }

  .card-counter .count-numbers {
    position: absolute;
    right: 35px;
    top: 20px;
    font-size: 25px;
    display: block;
  }

  .card-counter .count-name {
    position: absolute;
    right: 35px;
    top: 65px;
    font-style: italic;
    text-transform: capitalize;
    opacity: 0.5;
    display: block;
    font-size: 18px;
  }
`;
