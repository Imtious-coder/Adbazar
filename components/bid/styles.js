/** @jsx jsx */
import { css } from "@emotion/core";

export const bids_css = css`
  .comment-widgets {
    position: relative;
    margin-bottom: 10px;
    max-height: 400px;
    overflow-y: scroll;
  }

  .comment-widgets .comment-row {
    border-bottom: 1px solid transparent;
    padding: 0px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 5px 0;
  }

  .comment-text {
    padding-left: 15px;
  }

  .comment-widgets .comment-row:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  .bid-price {
    font-size: 0.8rem;
    font-weight: 700;
    color: orangered;
  }
`;
