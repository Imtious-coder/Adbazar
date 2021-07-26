/** @jsx jsx */
import { css } from "@emotion/core";

export const avatar_css = css`
  .avatar-wrapper {
    position: relative;
    height: 100px;
    width: 100px;
    margin: 0px auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 5px -5px black;
    transition: all 0.3s ease;
  }
  .avatar-wrapper:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .avatar-wrapper:hover .profile-pic {
    opacity: 0.5;
  }
  .avatar-wrapper .profile-pic {
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;
  }
  .avatar-wrapper .profile-pic:after {
    font-family: FontAwesome;
    content: "\f007";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 70px;
    background: #ecf0f1;
    color: #6d6d6d;
    text-align: center;
  }
  .avatar-wrapper .upload-button {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .avatar-wrapper .upload-button .upload-icon {
    position: absolute;
    font-size: 100px;
    top: 0;
    left: 0;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease;
    color: #6e6e6e;
  }
  .avatar-wrapper .upload-button:hover .upload-icon {
    opacity: 0.9;
  }
`;
