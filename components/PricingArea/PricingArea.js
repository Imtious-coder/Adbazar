/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { pricing_area_css } from "./styles";

export default function PricingArea() {
  return (
    <section className="bg-body s-space-default" css={pricing_area_css}>
      <div className="container">
        <div className="section-title-dark">
          <h2>Start Earning From Things You Don’t Need Anymore</h2>
          <p>It’s very Simple to choose pricing &amp; Plan</p>
        </div>
        <div className="row d-md-flex">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="pricing-box bg-box">
              <div className="plan-title">Free Post</div>
              <div className="price">
                <span className="currency">$</span>0
                <span className="duration">/ Per mo</span>
              </div>
              <h3 className="title-bold-dark size-xl">
                Always FREE Ad Posting
              </h3>
              <p>
                Post as many ads as you like for 30 days without limitations and
                100% FREE SUBMIT AD
              </p>
              <a href="/" className="cp-default-btn-lg">
                Submit Ad
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center col-lg-2 col-md-12 col-sm-12 col-12">
            <div className="other-option bg-primary">or</div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="pricing-box bg-box">
              <div className="plan-title">Premium Post</div>
              <div className="price">
                <span className="currency">$</span>19
                <span className="duration">/ Per mo</span>
              </div>
              <h3 className="title-bold-dark size-xl">Featured Ad Posting</h3>
              <p>
                Post as many ads as you like for 30 days without limitations and
                100% FREE SUBMIT AD
              </p>
              <a href="/" className="cp-default-btn-lg">
                Submit Ad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
