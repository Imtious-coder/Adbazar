/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { truncatechars } from "humanize";
import SideBar from "../SideBar";
import SingleAd from "./SingleAd";
import { getAdsAsync, getMoreAdsAsync } from "../../redux/adSlice";
import { Spinner } from "react-bootstrap";
import { all_ads_css } from "./styles";

import { withTranslation, i18n } from "../../i18n";

function AllAds({ t }) {
  const { allAds, total, next, adsRequestStatus } = useSelector(
    (state) => state.ads
  );

  const { selectedCategory, selectedLocation } = useSelector(
    (state) => state.sidebar
  );

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = router.query;

  const limit = 20;

  const params = {
    limit: limit,
    offset: 0,
    search: "",
    ...router.query,
  };

  const handlePageChange = () => {
    dispatch(getMoreAdsAsync({ ...params, offset: page * limit }));
    setPage(page + 1);
  };

  // Fetch ads on first mount
  useEffect(() => {
    if (allAds !== undefined && allAds.length === 0) {
      dispatch(getAdsAsync());
    }
  }, []);

  return (
    <div css={all_ads_css}>
      <section className="s-space-bottom-full bg-accent-shadow-body allpost-wrapper mt-1">
        <div className="container">
          <div className="row">
            <div className="order-1 order-md-2 col-lg-9 col-md-4 col-12 p-0">
              <div className="gradient-wrapper item-mb">
                <div className="gradient-title">
                  <h2 className="d-md-none">
                    {truncatechars(
                      `(${Number(total).toLocaleString(i18n.language)}) ${t(
                        "ads"
                      )} ${user ? ", " + user : ""} ${
                        selectedCategory.name
                          ? ", " + selectedCategory.name
                          : ""
                      } ${
                        selectedLocation.name
                          ? ", " + selectedLocation.name
                          : ""
                      }`,
                      40
                    )}
                  </h2>
                  <h2 className="d-none d-md-block">
                    {`(${Number(total).toLocaleString(i18n.language)}) ${t(
                      "ads"
                    )} ${user ? ", " + user : ""} ${
                      selectedCategory.name ? ", " + selectedCategory.name : ""
                    } ${
                      selectedLocation.name ? ", " + selectedLocation.name : ""
                    }`}
                  </h2>
                </div>
                {adsRequestStatus === "pending" && (
                  <div className="text-center mt-2">
                    <Spinner animation="border" />
                  </div>
                )}

                <div className="zoom-gallery category-grid-layout1 category-list-layout2 p-2">
                  <InfiniteScroll
                    dataLength={allAds.length ? allAds.length : 0}
                    next={handlePageChange}
                    hasMore={next ? true : false}
                    style={{ overflow: "hidden" }}
                    scrollThreshold={0.5}
                  >
                    <div className="row">
                      {allAds &&
                        allAds.map((ad, i) => (
                          <div
                            className="col-md-4 col-6 rp-padding"
                            key={`ad-${i}`}
                          >
                            <SingleAd ad={ad} t={t} />
                          </div>
                        ))}
                    </div>
                  </InfiniteScroll>
                </div>
              </div>
            </div>
            <div className="order-2 order-md-1 col-lg-3 col-md-8 col-12 d-none d-md-block">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

AllAds.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(AllAds);
