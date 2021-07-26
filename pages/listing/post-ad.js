/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Container, Form, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaList } from "react-icons/fa";
import ElectronicsAdForm from "../../components/ads/adpost-forms/ElectronicsAdForm";
import VehicleAdForm from "../../components/ads/adpost-forms/VehicleAdForm";
import PropertyAdForm from "../../components/ads/adpost-forms/PropertyAdForm";
import ServiceAdForm from "../../components/ads/adpost-forms/ServiceAdForm";
import GeneralAdForm from "../../components/ads/adpost-forms/GeneralAdForm";
import GeneralConditionForm from "../../components/ads/adpost-forms/GeneralConditionForm";
import ToBuyAdForm from "../../components/ads/adpost-forms/ToBuyAdForm";
import AuctionAdForm from "../../components/ads/adpost-forms/AuctionAdForm";
import JobAdForm from "../../components/ads/adpost-forms/JobAdForm";
import Layout from "../../components/Layout/Layout";
import LoginRequired from "../../components/RouteProtection/LoginRequired";
import CategoryModal from "../../components/ads/CategoryModal";
import LocationModal from "../../components/ads/LocationModal";
import { withTranslation } from "../../i18n";

import { truncatechars } from "humanize";

import {
  setActiveAdpostModal,
  setActiveCategoryModal,
  setActiveLocationModal,
} from "../../redux/modalSlice";
import { clearSelection, getCategoriesAsync } from "../../redux/sidebarSlice";
import SellingTips from "../../components/SellingTips/SellingTips";
import { getUserPhoneNumbersAsync } from "../../redux/authSlice";

function PostAd({ t }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { type, ad_type } = router.query;

  const { selectedCategory, selectedLocation } = useSelector(
    (state) => state.sidebar
  );

  let params = {};

  // Conditional Form Renderer
  const renderForm = () => {
    if (ad_type !== undefined && ad_type === "to_buy") {
      return <ToBuyAdForm />;
    } else if (ad_type !== undefined && ad_type === "auction") {
      return <AuctionAdForm />;
    } else {
      switch (type) {
        case "electronics":
          return <ElectronicsAdForm />;
          break;
        case "vehicle":
          return <VehicleAdForm />;
          break;
        case "property":
          return <PropertyAdForm />;
          break;
        case "service":
          return <ServiceAdForm />;
          break;
        case "general":
          return <GeneralAdForm />;
          break;
        case "general_condition":
          return <GeneralConditionForm />;
          break;
        case "job":
          params = { ad_type: "job" };
          return <JobAdForm />;
          break;

        default:
          return <GeneralAdForm />;
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(getCategoriesAsync(params));
    dispatch(setActiveAdpostModal(false));
    dispatch(getUserPhoneNumbersAsync());
  }, [type]);

  return (
    <Layout>
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <Container>
          <Row className="py-3">
            <Col md={9} className="p-1 p-md-2">
              <div className="gradient-wrapper mb--sm">
                <div className="gradient-title">
                  <h2>{t("post_ad")}</h2>
                </div>
                <div className="p-2">
                  <div className="section-title-left-dark border-bottom d-flex">
                    <h3>
                      <img
                        src="/img/post-add1.png"
                        alt="post-add"
                        className="img-fluid"
                      />{" "}
                      {t("ad_information")}
                    </h3>
                  </div>
                  <Form.Group>
                    <Row>
                      <Col className="pr-1">
                        <button
                          className="btn btn-block bg-primary-btn text-white mt-2"
                          onClick={() => dispatch(setActiveCategoryModal(true))}
                        >
                          <FaList />
                          <span className="d-md-none">
                            {" "}
                            {selectedCategory.id
                              ? truncatechars(selectedCategory.name, 12)
                              : t("select_category")}
                          </span>
                          <span className="d-none d-md-inline">
                            {" "}
                            {selectedCategory.id
                              ? selectedCategory.name
                              : t("select_category")}
                          </span>
                        </button>
                      </Col>
                      <Col className="pl-1">
                        <button
                          className="btn  btn-block bg-primary-btn text-white mt-2"
                          onClick={() => dispatch(setActiveLocationModal(true))}
                        >
                          <FaMapMarkerAlt />{" "}
                          <span className="d-md-none">
                            {selectedLocation.id
                              ? truncatechars(selectedLocation.name, 12)
                              : t("select_location")}
                          </span>
                          <span className="d-none d-md-inline">
                            {selectedLocation.id
                              ? selectedLocation.name
                              : t("select_location")}
                          </span>
                        </button>
                      </Col>
                    </Row>
                  </Form.Group>
                  {/* Change Form Conditionaly Here */}
                  {renderForm()}

                  {/* Category & Location Modal */}
                  <CategoryModal />
                  <LocationModal />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <SellingTips />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

PostAd.getInitialProps = async () => ({
  namespacesRequired: ["ad-form"],
});
export default LoginRequired(withTranslation("ad-form")(PostAd));
