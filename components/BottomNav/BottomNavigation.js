/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { withTranslation } from "../../i18n";

import {
  FaComment,
  FaHeart,
  FaHome,
  FaPlusCircle,
  FaUser,
} from "react-icons/fa";
import { bottom_menu_css } from "./styles";
import { setActiveAdpostModal } from "../../redux/modalSlice";
import NavigationModal from "./NavigationModal";
import { clearSelection } from "../../redux/sidebarSlice";
import { getAdsAsync } from "../../redux/adSlice";

function BottomNavigation({ t }) {
  const [show, setShow] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleAllAdClick = () => {
    dispatch(clearSelection());
    dispatch(getAdsAsync());
  };

  const onAdpostClick = () => {
    dispatch(setActiveAdpostModal(true));
  };

  return (
    <div css={bottom_menu_css} className="d-md-none">
      <nav className="mobile-bottom-nav">
        <div className="mobile-bottom-nav__item">
          <Link href="/">
            <a onClick={handleAllAdClick}>
              <div
                className={`mobile-bottom-nav__item-content ${
                  router.pathname === "/" ? "active" : ""
                }`}
              >
                <i className="material-icons">
                  <FaHome size="20" />
                </i>
                {t("home")}
              </div>
            </a>
          </Link>
        </div>
        <div className="mobile-bottom-nav__item ml-minus-10">
          <Link href="/dashboard/favourite-ads">
            <a>
              <div
                className={`mobile-bottom-nav__item-content ${
                  router.pathname === "/dashboard/favourite-ads" ? "active" : ""
                }`}
              >
                <i className="material-icons">
                  <FaHeart size="20" />
                </i>
                {t("favourite")}
              </div>
            </a>
          </Link>
        </div>
        <div className="tabs">
          <div className="fab" onClick={onAdpostClick}>
            <FaPlusCircle color="#333" size="20" />
          </div>
        </div>
        <div className="mobile-bottom-nav__item">
          <Link href="/chat">
            <a>
              <div
                className={`mobile-bottom-nav__item-content ${
                  router.pathname === "/chat" ? "active" : ""
                }`}
              >
                <i className="material-icons">
                  <FaComment size="20" />
                </i>
                {t("chat")}
              </div>
            </a>
          </Link>
        </div>

        <div className="mobile-bottom-nav__item">
          <a href="#!" onClick={() => setShow(true)}>
            <div
              className={`mobile-bottom-nav__item-content ${
                router.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <i className="material-icons">
                <FaUser size="20" />
              </i>
              {t("account")}
            </div>
          </a>
        </div>
      </nav>

      <NavigationModal show={show} setShow={setShow} />
    </div>
  );
}

BottomNavigation.getInitialProps = async () => ({
  namespacesRequired: ["bottomnav"],
});
export default withTranslation("bottomnav")(BottomNavigation);
