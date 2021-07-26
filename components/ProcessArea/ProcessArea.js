/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { process_area_css } from "./styles";

export default function ProcessArea() {
  return (
    <div css={process_area_css}>
      <section className="bg-accent s-space-regular">
        <div className="container">
          <div className="section-title-dark">
            <h2>How To Start Selling Your Products</h2>
            <p>
              It’s very simple to choose pricing &amp; level of exposure on
              pricing page
            </p>
          </div>
          <ul className="process-area">
            <li>
              <img
                src="img/banner/process1.png"
                alt="process"
                className="img-fluid"
              />
              <h3>Upload Your Products</h3>
              <p>
                {" "}
                Bmply dummy text of the printing and typesing industrypsum been
                the induse.
              </p>
            </li>
            <li>
              <img
                src="img/banner/process2.png"
                alt="process"
                className="img-fluid"
              />
              <h3>Set Your Price</h3>
              <p>
                {" "}
                Bmply dummy text of the printing and typesing industrypsum been
                the induse.
              </p>
            </li>
            <li>
              <img
                src="img/banner/process3.png"
                alt="process"
                className="img-fluid"
              />
              <h3>Start Your Business</h3>
              <p>
                {" "}
                Bmply dummy text of the printing and typesing industrypsum been
                the induse.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
