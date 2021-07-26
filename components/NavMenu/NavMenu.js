/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { logout } from "../../redux/authSlice";
import authAPI from "../../services/authAPI";

import { i18n, withTranslation } from "../../i18n";

import {
  Navbar,
  Nav,
  Container,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import { slide as SliderMenu } from "react-burger-menu";
import SuccessModal from "../../components/CommonModals/SuccessModal";
import ErrorModal from "../../components/CommonModals/ErrorModal";

import {
  FaList,
  FaClock,
  FaMale,
  FaComment,
  FaSignInAlt,
  FaBars,
  FaUserAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaBell,
} from "react-icons/fa";

import { nav_menu_css, sidebarStyles } from "./styles";
import { getUnreadChatAsync } from "../../redux/chatSlice";
import { setActiveAdpostModal } from "../../redux/modalSlice";
import AdpostModal from "../CommonModals/AdpostModal";
import LanguageChanger from "./LanguageChanger";
import { getAdsAsync, getNoticesAsync } from "../../redux/adSlice";
import { clearSelection } from "../../redux/sidebarSlice";

function NavMenu({ t }) {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { unread_chat_count } = useSelector((state) => state.chat);
  const { notices } = useSelector((state) => state.ads);

  const dispatch = useDispatch();
  const router = useRouter();

  const onClose = () => {
    setIsOpen(false);
  };

  const handleAllAdClick = () => {
    dispatch(clearSelection());
    dispatch(getAdsAsync());
  };

  const onBidClick = () => {
    dispatch(clearSelection());
    dispatch(getAdsAsync({ limit: 20, offset: 0, is_bid: true }));
  };

  const handleLogout = async () => {
    await authAPI.logout();
    dispatch(logout());
    router.push("/login");
  };

  useEffect(() => {
    if (user !== undefined && user.id) {
      dispatch(getUnreadChatAsync());
    }
  }, [user]);

  useEffect(() => {
    dispatch(getNoticesAsync());
  }, []);

  return (
    <div css={nav_menu_css}>
      <SliderMenu
        width="200px"
        styles={sidebarStyles}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        customBurgerIcon={false}
      >
        <Link href="/">
          <a
            onClick={() => {
              handleAllAdClick();
              onClose();
            }}
          >
            {t("all_ads")}
          </a>
        </Link>

        <Link href="/?is_bid=true">
          <a onClick={onClose}>{t("bids")}</a>
        </Link>
        <Link href="/">
          <a onClick={onClose}>{t("bride_groom")}</a>
        </Link>

        {!user.id && (
          <>
            <Link href="/register">
              <a>{t("register")}</a>
            </Link>
            <Link href="/login">
              <a>{t("login")}</a>
            </Link>
          </>
        )}
        <Link href="/contact">
          <a>{t("contact")}</a>
        </Link>
        <LanguageChanger t={t} />

        <a href="#!" className="play_btn">
          <img src="/img/footer/follow1.jpg" alt="card" width="150" />
        </a>
      </SliderMenu>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Button
            variant="outline-dark"
            className="d-md-none sidebar-btn text-white"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </Button>
          <Navbar.Brand className="text-white mb-1">
            <Link href="/">
              <a onClick={handleAllAdClick}>
                <img
                  src="/img/adbazar.png"
                  alt="Adbazar"
                  className="img-fluid"
                />
              </a>
            </Link>
            <Button
              variant="outline-warning"
              size="sm"
              className="text-white ml-2 d-none d-md-inline"
              onClick={() => {
                i18n.changeLanguage(i18n.language === "en" ? "bn" : "en", () =>
                  router.reload()
                );
              }}
            >
              {i18n.language === "bn" ? "en" : "bn"}
            </Button>

            <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-bottom">
                  <Popover.Content>
                    <ul>
                      {notices &&
                        notices.map((item, i) => (
                          <li key={i}>{item.notice}</li>
                        ))}
                    </ul>
                  </Popover.Content>
                </Popover>
              }
            >
              <FaBell
                className="ml-5 d-md-none"
                color={notices?.length > 0 ? "#ffbd15" : ""}
              />
            </OverlayTrigger>
          </Navbar.Brand>

          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Link href="/" passHref>
                <Nav.Link
                  active={router.pathname === "/" && !!!router.query["is_bid"]}
                  onClick={handleAllAdClick}
                >
                  <FaList /> {t("all_ads")}
                </Nav.Link>
              </Link>
              <Link href="/?is_bid=true" passHref>
                <Nav.Link
                  active={!!router.query["is_bid"]}
                  onClick={onBidClick}
                >
                  <FaClock /> {t("bids")}
                </Nav.Link>
              </Link>
              <Link href="/bride-grooms" passHref>
                <Nav.Link>
                  <FaMale /> {t("bride_groom")}
                </Nav.Link>
              </Link>

              <Link href="/chat" passHref>
                <Nav.Link active={router.pathname === "/chat"}>
                  <FaComment /> {t("chat")}
                  {unread_chat_count != 0 && (
                    <span className="badge badge-danger ml-2">
                      {unread_chat_count}
                    </span>
                  )}
                </Nav.Link>
              </Link>

              {user.id ? (
                <>
                  <Link href="/dashboard" passHref>
                    <Nav.Link>
                      <FaUserAlt /> {t("my_account")}
                    </Nav.Link>
                  </Link>
                  <Nav.Link onClick={handleLogout}>
                    <FaSignOutAlt /> {t("logout")}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Link href="/register" passHref>
                    <Nav.Link active={router.pathname.includes("/register")}>
                      <FaUserPlus /> {t("register")}
                    </Nav.Link>
                  </Link>
                  <Link href="/login" passHref>
                    <Nav.Link active={router.pathname.includes("/login")}>
                      <FaSignInAlt /> {t("login")}
                    </Nav.Link>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>

          <Button
            variant="warning"
            className="ab-default-btn d-none d-md-block text-white"
            onClick={() => dispatch(setActiveAdpostModal(true))}
          >
            {t("post_ad")}
          </Button>
        </Container>
      </Navbar>

      {/* Ad Post Modal */}
      <AdpostModal />

      {/* Success Alert Modal */}
      <SuccessModal />
      {/* Error Alert Modal */}
      <ErrorModal />
    </div>
  );
}

export default withTranslation("header")(NavMenu);

const sidebar_css = css``;
