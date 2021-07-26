/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { card_css } from "./styles";

export default function DasboardCard({ icon, variant, count, count_name }) {
  return (
    <div css={card_css}>
      <div className={`card-counter ${variant}`}>
        {icon}
        <span className="count-numbers">{count}</span>
        <span className="count-name">{count_name}</span>
      </div>
    </div>
  );
}
