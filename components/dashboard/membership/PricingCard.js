/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useSelector } from "react-redux";
import { pricing_css } from "./styles";

export default function PricingCard({ item, onUpgrade }) {
  const onUpgradeClick = (e, item) => {
    e.preventDefault();
    onUpgrade(item);
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div css={pricing_css}>
      <div className={`pricingTable ${item?.color}`}>
        <div className="pricingTable-header">
          <h3 className="title">{item?.name}</h3>
        </div>
        <ul className="pricing-content">
          <li>
            Ad Limit {item?.ad_limit}{" "}
            {item?.membership_duration == "0" ? "" : "(Live)"}{" "}
          </li>
          <li>Ad duration {item?.ad_duration} days</li>
        </ul>
        <div className="price-value">
          <span className="currency">৳</span>
          <span className="amount">{item?.price}</span>
          <span className="duration">
            /{item?.type === "free" ? "∞" : item?.membership_duration} days
          </span>
        </div>
        <div className="pricingTable-signup">
          {item.type === "free" && user.type === "free" ? (
            <a href="#!">_</a>
          ) : (
            <a href="#!" onClick={(e) => onUpgradeClick(e, item)}>
              {user.membership_name === item.name ? "Renew" : "Upgrade"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
