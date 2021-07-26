/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

import { numberFormat, truncatechars } from "humanize";

import { all_ads_css } from "./styles";

export default function SlickItem({ ad }) {
  return (
    <div css={all_ads_css}>
      <div className="product-box mx-2 mb-0">
        <div className="item-mask-wrapper">
          <div className="secondary-bg-box">
            <img className="related-image" src={ad?.thumbnail} alt="Image" />
          </div>
        </div>
        <div className="item-content">
          <h4 className="short-title m-0 p-0">
            <Link href={`/listing/ad-details/?adId=${ad.id}`}>
              <a>{truncatechars(ad?.ad_title, 18)}</a>
            </Link>
          </h4>
          {ad.price !== 0 && (
            <p className="m-0 p-0">৳ {numberFormat(ad?.price, [0])}</p>
          )}
        </div>
      </div>
    </div>
  );
}
