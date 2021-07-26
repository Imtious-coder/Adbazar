/** @jsx jsx */
import { jsx } from "@emotion/core";
import ImageUploading from "react-images-uploading";

import { image_upload_css } from "./styles";

export default function ImageUploader({ images, setImages }) {
  const onImageChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div css={image_upload_css}>
      <ImageUploading
        multiple
        value={images}
        onChange={onImageChange}
        maxNumber={5}
        dataURLKey="image"
        acceptType={["jpg", "jpeg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              type="button"
              className="btn btn-block uploader-btn"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop image here
            </button>

            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["image"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => onImageUpdate(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm mt-2"
                    onClick={() => onImageRemove(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
