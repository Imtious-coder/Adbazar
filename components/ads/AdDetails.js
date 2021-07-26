/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";
import { Spinner } from "react-bootstrap";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { ad_details_css } from "./styles";
import Specifications from "./Specifications";
import Bids from "../bid/Bids";
import SellerInfo from "./SellerInfo";
import SafetyTips from "./SafetyTips";
import ChatModal from "./ChatModal";

import RelatedAds from "./RelatedAds";
import adsAPI from "../../services/adsAPI";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../../redux/modalSlice";
import AdDetailActionButtons from "./AdDetailActionButtons";
import CallModal from "./CallModal";

import { withTranslation, i18n } from "../../i18n";

function AdDetails({ ad, status, t }) {
  const [showChat, setShowChat] = useState(false);

  const [showCall, setShowCall] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  // Handle Chat Click
  const onChat = (e) => {
    e.preventDefault();

    // Check if user is authenticated
    if (user !== undefined && user.id) {
      // Show Chat Modal
      setShowChat(true);
    } else {
      // Redirect to login
      router.push(`/login?next=${router.asPath}`);
    }
  };

  // Handle Call Click
  const onCall = (e) => {
    e.preventDefault();
    setShowCall(true);
  };

  // Handle Save Ad
  const onSave = async () => {
    const res = await adsAPI.createFavouriteAd({ ad: ad.id });

    if (/20[0-6]/g.test(res.status)) {
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: "Ad Saved Successfully.",
        })
      );
    } else {
      dispatch(
        setActiveErrorModal({ active: true, message: "Login to add favourite" })
      );
    }
  };

  if (status === "pending") {
    return (
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <div className="container">
          <div className="row pt-3">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="gradient-wrapper item-mb">
                <div className="gradient-title">
                  <h2>Ad Details</h2>
                </div>
                <div className="gradient-padding reduce-padding">
                  <div className="single-product-img-layout1 item-mb">
                    <div className="row">
                      <div className="col text-center">
                        <Spinner animation="border" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div css={ad_details_css}>
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <div className="container">
          <div className="row pt-3">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="gradient-wrapper item-mb">
                <div className="gradient-title">
                  <h2>Ad Details</h2>
                </div>
                <div className="gradient-padding reduce-padding">
                  <div className="single-product-img-layout1 item-mb">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-center">
                          <Carousel emulateTouch showThumbs={false}>
                            {ad?.ad_images?.map((item, i) => (
                              <img
                                key={`img-${i}`}
                                alt="single"
                                src={item.image}
                                className="slider-img"
                              />
                            ))}
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section-title-left-dark child-size-xl">
                    <h5 className="mb-2 text-dark font-weight-bold">
                      {ad?.ad_title}
                    </h5>
                    <h4 className="mb-2 text-secondary">
                      {ad.price !== 0 && (
                        <span className="price">
                          ৳ {ad?.price?.toLocaleString(i18n.language)}{" "}
                          {ad?.negotiable && `(${t("negotiable")})`}
                        </span>
                      )}
                    </h4>

                    {ad.created
                      ? moment(ad?.created).locale(i18n?.language).fromNow()
                      : ""}
                    <hr />
                  </div>
                  <ul className="specification-layout1 mb-2">
                    {status === "fulfilled" && <Specifications ad={ad} />}
                  </ul>

                  <div className="section-title-left-dark child-size-xl ">
                    <h6>{"Product Description"}:</h6>
                    <pre className="ad-details border p-1">
                      {ad.description}
                    </pre>
                  </div>

                  <hr />
                  <ul className="item-actions">
                    <li>
                      <a
                        href="#"
                        onClick={onSave}
                        className="btn btn-outline-info btn-sm"
                      >
                        <FaHeart /> Favourite
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://adbazar.net${router.asPath}`}
                        className="btn btn-outline-info btn-sm"
                        target="_blank"
                      >
                        <FaShareAlt /> Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {status === "fulfilled" && ad.is_bid && (
                <div className="gradient-wrapper item-mb">
                  <div className="gradient-title">
                    <h2>Place Bid</h2>
                  </div>
                  <div>
                    <div>
                      <Bids />
                    </div>
                  </div>
                </div>
              )}

              {status === "fulfilled" && !ad.is_bid && (
                <div className="gradient-wrapper item-mb">
                  <div className="gradient-title ">
                    <h2>Related Ads</h2>
                  </div>
                  <div className="p-2 pb-0 mb-0">
                    <RelatedAds ads={ad?.related_ads} />
                  </div>
                </div>
              )}
            </div>
            {status === "fulfilled" && (
              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 pb-5">
                <SellerInfo ad={ad} onChat={onChat} />

                <SafetyTips />
              </div>
            )}
          </div>
        </div>

        {/* Call And Chat Action */}
        {!ad.is_bid && !ad.is_job && (
          <AdDetailActionButtons onChat={onChat} onCall={onCall} />
        )}
      </section>
      {/* Chat Modal */}
      <ChatModal ad={ad} show={showChat} setShow={setShowChat} />

      {/* Call Modal */}
      <CallModal ad={ad} show={showCall} setShow={setShowCall} />
    </div>
  );
}

AdDetails.getInitialProps = async () => ({
  namespacesRequired: ["ad-details"],
});

export default withTranslation("ad-details")(AdDetails);
