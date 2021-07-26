/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import { FaBolt, FaMapMarkerAlt, FaStar, FaTag } from "react-icons/fa";
import { humanize } from "humanize";
import moment from "moment";
import { i18n } from "../../i18n";

export default function SingleAd({ ad, t }) {
  return (
    <div css={single_ad_css}>
      <div className="product-box item-mb">
        <div className="item-mask-wrapper">
          <div className="item-mask secondary-bg-box">
            <Link href={`/listing/ad-details/?adId=${ad.id}`}>
              <a>
                <img
                  src={ad.thumbnail}
                  alt={ad.ad_title}
                  className="img-fluid img-thumb"
                />
              </a>
            </Link>

            {ad.top_ad && (
              <div className="trending-sign active">
                <FaBolt className="icon" />
              </div>
            )}

            {ad?.user_type === "paid" && (
              <div className="membership-sign badge badge-secondary">
                <FaStar className="icon" color="orange" />
                <span>{t("member")}</span>
              </div>
            )}
          </div>
        </div>
        <div className="item-content">
          <h3 className="post-title d-none d-md-block">
            <Link href={`/listing/ad-details/?adId=${ad.id}`}>
              <a>{humanize.truncatechars(ad.ad_title, 60)}</a>
            </Link>
          </h3>
          <h3 className="post-title d-md-none">
            <Link href={`/listing/ad-details/?adId=${ad.id}`}>
              {humanize.truncatechars(ad.ad_title, 35)}
            </Link>
          </h3>

          <ul className="upload-info">
            <li className="place d-none d-md-inline">
              <FaMapMarkerAlt />
              {ad.sub_location},{ad.location}
            </li>
            <li className="place d-md-none">
              {humanize.truncatechars(`${ad.sub_location},${ad.location}`, 25)}
            </li>
            <li className="tag-ctg">
              <FaTag />
              {ad.sub_category ? ad.sub_category : ad.category}
            </li>
          </ul>

          {ad.is_bid ? (
            <Link href={`/listing/ad-details/?adId=${ad.id}`}>
              <a className="bg-primary btn-sm text-white bid-btn">
                {t("place_bid")}
              </a>
            </Link>
          ) : ad.is_job ? (
            <div className="price">{t("job")}</div>
          ) : (
            <div className="price">
              ৳ {ad?.price?.toLocaleString(i18n.language)}
            </div>
          )}
          <Link href={`/listing/ad-details/?adId=${ad.id}`}>
            <a className="product-details-btn">{t("details")}</a>
          </Link>
          <span className="time">
            {ad.created
              ? moment(ad?.created).locale(i18n?.language).fromNow(true)
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
const single_ad_css = css`
  .post-title {
    font-size: 14px;
  }
  .price {
    font-size: 0.9rem !important;
  }
`;
