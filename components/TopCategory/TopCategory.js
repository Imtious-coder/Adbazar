/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { top_category_css } from "./styles";

export default function TopCategory() {
  return (
    <div css={top_category_css}>
      <section className="service-layout1 bg-accent s-space-custom2">
        <div className="container">
          <div className="section-title-dark">
            <h1>Welcome To AdBazar</h1>
            <p>Browse Our Top Categories</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 item-mb">
              <div className="service-box1 bg-body text-center">
                <img
                  src="img/service/service1.png"
                  alt="service"
                  className="img-fluid"
                />
                <h3 className="title-medium-dark mb-none">
                  <a href="category-grid-layout1.html">Electronics</a>
                </h3>
                <div className="view">(19,805)</div>
                <p>
                  Emply dummy text of the printing and taypng industrxt ever
                  sincknown.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 item-mb">
              <div className="service-box1 bg-body text-center">
                <img
                  src="img/service/service2.png"
                  alt="service"
                  className="img-fluid"
                />
                <h3 className="title-medium-dark mb-none">
                  <a href="category-grid-layout2.htm">Cars &amp; Vehicles</a>
                </h3>
                <div className="view">(12,857)</div>
                <p>
                  Emply dummy text of the printing and taypng industrxt ever
                  sincknown.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 item-mb">
              <div className="service-box1 bg-body text-center">
                <img
                  src="img/service/service3.png"
                  alt="service"
                  className="img-fluid"
                />
                <h3 className="title-medium-dark mb-none">
                  <a href="category-grid-layout3.html">Overseas Jobs</a>
                </h3>
                <div className="view">(16,267)</div>
                <p>
                  Emply dummy text of the printing and taypng industrxt ever
                  sincknown.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 item-mb">
              <div className="service-box1 bg-body text-center">
                <img
                  src="img/service/service4.png"
                  alt="service"
                  className="img-fluid"
                />
                <h3 className="title-medium-dark mb-none">
                  <a href="category-list-layout1.html">Pets &amp; Animals</a>
                </h3>
                <div className="view">(1,245)</div>
                <p>
                  Emply dummy text of the printing and taypng industrxt ever
                  sincknown.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 item-mb">
              <div className="service-box1 bg-body text-center">
                <img
                  src="img/service/service5.png"
                  alt="service"
                  className="img-fluid"
                />
                <h3 className="title-medium-dark mb-none">
                  <a href="category-list-layout2.html">
                    Hobby, Sport &amp; Kids
                  </a>
                </h3>
                <div className="view">(15,897)</div>
                <p>
                  Emply dummy text of the printing and taypng industrxt ever
                  sincknown.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 item-mb">
              <div className="service-box1 bg-body text-center">
                <img
                  src="img/service/service6.png"
                  alt="service"
                  className="img-fluid"
                />
                <h3 className="title-medium-dark mb-none">
                  <a href="category-list-layout3.html">
                    House &amp; Appartment
                  </a>
                </h3>
                <div className="view">(13,657)</div>
                <p>
                  Emply dummy text of the printing and taypng industrxt ever
                  sincknown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
