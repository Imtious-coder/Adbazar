/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import BottomNavigation from "../BottomNav/BottomNavigation";

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      {children}
      <BottomNavigation />
      <Footer />
    </>
  );
}

const layout_css = css``;
