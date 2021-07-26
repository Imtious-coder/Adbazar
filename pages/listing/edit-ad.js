/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Container, Form, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaList } from "react-icons/fa";
import Layout from "../../components/Layout/Layout";
import LoginRequired from "../../components/RouteProtection/LoginRequired";
import CategoryModal from "../../components/ads/CategoryModal";
import LocationModal from "../../components/ads/LocationModal";
import ElectronicsAdEditForm from "../../components/ads/adedit-forms/ElectronicsAdEditForm";
import VehicleAdEditForm from "../../components/ads/adedit-forms/VehicleAdEditForm";
import PropertyAdEditForm from "../../components/ads/adedit-forms/PropertyAdEditForm";
import ServiceAdEditForm from "../../components/ads/adedit-forms/ServiceAdEditForm";
import GeneralAdEditForm from "../../components/ads/adedit-forms/GeneralAdEditForm";
import ToBuyAdEditForm from "../../components/ads/adedit-forms/ToBuyAdEditForm";
import AuctionAdEditForm from "../../components/ads/adedit-forms/AuctionAdEditForm";

import {
  setActiveCategoryModal,
  setActiveLocationModal,
} from "../../redux/modalSlice";
import { getAdByIdAsync } from "../../redux/adSlice";
import { setCategory, setLocation } from "../../redux/sidebarSlice";
import JobAdEditForm from "../../components/ads/adedit-forms/JobAdEditForm";
import GeneralConditonEditForm from "../../components/ads/adedit-forms/GeneralConditonEditForm";

function EditAd() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { type, ad_type, adId } = router.query;

  const { selectedCategory, selectedLocation } = useSelector(
    (state) => state.sidebar
  );

  const { adById, adByIdRequestStatus } = useSelector((state) => state.ads);

  // Conditional Form Renderer
  const renderForm = () => {
    if (adByIdRequestStatus === "pending") return;

    if (ad_type !== undefined && ad_type === "to_buy") {
      return <ToBuyAdEditForm ad={adById} />;
    } else if (ad_type !== undefined && ad_type === "auction") {
      return <AuctionAdEditForm ad={adById} />;
    } else {
      switch (type) {
        case "electronics":
          return <ElectronicsAdEditForm ad={adById} />;
          break;
        case "vehicle":
          return <VehicleAdEditForm ad={adById} />;
          break;
        case "property":
          return <PropertyAdEditForm ad={adById} />;
          break;
        case "service":
          return <ServiceAdEditForm ad={adById} />;
          break;
        case "general":
          return <GeneralAdEditForm ad={adById} />;
          break;
        case "general_condition":
          return <GeneralConditonEditForm ad={adById} />;
          break;
        case "job":
          return <JobAdEditForm ad={adById} />;
          break;

        default:
          return <GeneralAdEditForm ad={adById} />;
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(setCategory(adById.category));
    dispatch(setLocation(adById.location));
  }, [adById]);

  useEffect(() => {
    dispatch(getAdByIdAsync(adId));
  }, [adId]);

  return (
    <Layout>
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <Container>
          <Row className="py-3">
            <Col md={9}>
              <div className="gradient-wrapper mb--sm">
                <div className="gradient-title">
                  <h2>Post A Ad</h2>
                </div>
                <div className="p-2">
                  <div className="section-title-left-dark border-bottom d-flex">
                    <h3>
                      <img
                        src="/img/post-add1.png"
                        alt="post-add"
                        className="img-fluid"
                      />{" "}
                      Product Information
                    </h3>
                  </div>
                  <Form.Group>
                    <Row>
                      <Col md={6}>
                        <button
                          className="btn btn-block bg-primary-btn text-white mt-2"
                          onClick={() => dispatch(setActiveCategoryModal(true))}
                        >
                          <FaList />{" "}
                          {selectedCategory && selectedCategory.id
                            ? selectedCategory.name
                            : "Select Category"}
                        </button>
                      </Col>
                      <Col md={6}>
                        <button
                          className="btn  btn-block bg-primary-btn text-white mt-2"
                          onClick={() => dispatch(setActiveLocationModal(true))}
                        >
                          <FaMapMarkerAlt />{" "}
                          {selectedLocation && selectedLocation.id
                            ? selectedLocation.name
                            : "Select Location"}
                        </button>
                      </Col>
                    </Row>
                  </Form.Group>
                  {/* Change Form Conditionaly Here */}
                  {adById && renderForm()}

                  {/* Category & Location Modal */}
                  <CategoryModal />
                  <LocationModal />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="sidebar-item-box">
                <img
                  src="/img/banner/sidebar-banner1.jpg"
                  alt="banner"
                  className="img-fluid m-auto"
                />
              </div>
              <div className="sidebar-item-box">
                <div className="gradient-wrapper">
                  <div className="gradient-title">
                    <h3>How To Sell Quickly?</h3>
                  </div>
                  <ul className="sidebar-sell-quickly">
                    <li>Use a brief title and description of the item.</li>
                    <li>Make sure you post in the correct category</li>
                    <li>Add nice photos to your ad</li>
                    <li>Put a reasonable price</li>
                    <li>Check the item before publish</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
export default LoginRequired(EditAd);
