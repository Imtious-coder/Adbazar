/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import CategorySidebar from "./CategorySidebar";
import LocationSidebar from "./LocationSidebar";

import { sidebar_css } from "./styles";

export default function Sidebar() {
  return (
    <div css={sidebar_css}>
      <CategorySidebar />
      <LocationSidebar />
    </div>
  );
}
