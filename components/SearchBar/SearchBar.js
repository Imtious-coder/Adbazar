/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { FaMapMarkerAlt, FaList } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import CategorySearchModal from "./CategorySearchModal";
import LocationSearchModal from "./LocationSearchModal";
import { searchbar_css } from "./styles";
import {
  setActiveCategorySearchModal,
  setActiveLocationSearchModal,
} from "../../redux/modalSlice";

import { truncatechars } from "humanize";

import { withTranslation } from "../../i18n";
import { getAdsAsync } from "../../redux/adSlice";

function SearchBar({ t }) {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  let prev = null;
  const searchbarRef = useRef(null);

  let params = {
    limit: 20,
    offset: 0,
  };

  const { selectedCategory, selectedLocation } = useSelector(
    (state) => state.sidebar
  );

  const onCategoryClick = (e) => {
    e.preventDefault();
    dispatch(setActiveCategorySearchModal(true));
  };

  const onLocationClick = (e) => {
    e.preventDefault();
    dispatch(setActiveLocationSearchModal(true));
  };

  const handleSearch = () => {
    if (selectedCategory.id && selectedCategory.category) {
      params = { ...params, category__slug: selectedCategory.slug };
    } else if (selectedCategory.id) {
      params = { ...params, category__category__slug: selectedCategory.slug };
    }

    if (selectedLocation.id && selectedLocation.location) {
      params = { ...params, location__slug: selectedLocation.slug };
    } else if (selectedLocation.id) {
      params = { ...params, location__location__slug: selectedLocation.slug };
    }

    dispatch(getAdsAsync({ ...params, search: query }));

    router
      .push({ pathname: "/", query: { ...router.query, search: query } })
      .then(() => window.scrollTo(0, 0));
  };

  const handleNavigation = (e) => {
    const window = e.currentTarget;

    if (prev > window.scrollY && isMobile) {
      if (searchbarRef.current) {
        searchbarRef.current.style.top = "49px";
      }
    } else if (prev < window.scrollY && isMobile) {
      if (searchbarRef.current) {
        searchbarRef.current.style.top = "-65px";
      }
    }
    prev = window.scrollY;
  };

  useEffect(() => {
    prev = window.scrollY;
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  return (
    <div css={searchbar_css}>
      <section
        className="search-layout bg-body full-width-border-bottom searchbar"
        ref={searchbarRef}
      >
        <div className="container">
          <form id="cp-search-form">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 pr-1">
                <button
                  className="btn  btn-block bg-primary-btn text-white"
                  onClick={onLocationClick}
                >
                  <FaMapMarkerAlt />{" "}
                  <span className="d-md-none">
                    {selectedLocation.id
                      ? truncatechars(selectedLocation.name, 11)
                      : t("location")}
                  </span>
                  <span className="d-none d-md-inline">
                    {selectedLocation.id
                      ? selectedLocation.name
                      : t("location")}
                  </span>
                </button>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 pl-1">
                <button
                  className="btn btn-block bg-primary-btn text-white"
                  onClick={onCategoryClick}
                >
                  <FaList />{" "}
                  <span className="d-md-none">
                    {selectedCategory.id
                      ? truncatechars(selectedCategory.name, 11)
                      : t("category")}
                  </span>
                  <span className="d-none d-md-inline">
                    {selectedCategory.id
                      ? selectedCategory.name
                      : t("category")}
                  </span>
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="input-group mt-2 mt-md-0">
                  <input
                    placeholder={t("placeholder")}
                    name="query"
                    type="text"
                    className="form-control"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text cp-search-btn"
                      onClick={handleSearch}
                    >
                      {t("buttonText")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <CategorySearchModal />
      <LocationSearchModal />
    </div>
  );
}

SearchBar.getInitialProps = async () => ({
  namespacesRequired: ["searchbar"],
});

export default withTranslation("searchbar")(SearchBar);
