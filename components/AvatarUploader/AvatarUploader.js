/** @jsx jsx */
import { useRef } from "react";
import { jsx } from "@emotion/core";
import { avatar_css } from "./styles";
import { FaArrowCircleUp } from "react-icons/fa";

export default function AvatarUploader({ imageURL, handler, loading = false }) {
  const ref = useRef();

  const onUploadClick = () => {
    ref.current.click();
  };

  return (
    <div css={avatar_css}>
      <div className="avatar-wrapper">
        <img
          className="profile-pic"
          src={loading ? "/img/spinner.svg" : imageURL ? imageURL : ""}
        />
        <div className="upload-button" onClick={onUploadClick}>
          <FaArrowCircleUp className="upload-icon" />
        </div>
        <input
          className="file-upload"
          onChange={() => {
            handler(ref.current.files[0]);
            ref.current.value = "";
          }}
          ref={ref}
          type="file"
          accept="image/*"
        />
      </div>
    </div>
  );
}
