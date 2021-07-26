/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Layout from "../../../components/Layout/Layout";
import Sidebar from "../../../components/dashboard/Sidebar";
import PricingCard from "../../../components/dashboard/membership/PricingCard";
import { getAllMembershipAsync } from "../../../redux/dashboardSlice";
import {
  setActiveConfirmModal,
  setActiveErrorModal,
  setActiveSuccessModal,
  setConfirmModalLoading,
} from "../../../redux/modalSlice";
import UpgradeModal from "../../../components/dashboard/membership/UpgradeModal";
import ConfirmModal from "../../../components/CommonModals/ConfirmModal";

import dashboardAPI from "../../../services/dashboardAPI";
import LoginRequired from "../../../components/RouteProtection/LoginRequired";
import { getUserProfileAsync } from "../../../redux/authSlice";

function Membership() {
  const [itemToUpgrade, setItemToUpgrade] = useState({});
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const dispatch = useDispatch();

  const { memberships } = useSelector((state) => state.dashboard);

  const onUpgrade = (item) => {
    setItemToUpgrade(item);

    if (item.type === "free") {
      dispatch(setActiveConfirmModal(true));
    } else {
      setShowUpgradeModal(true);
    }
  };

  const onConfirm = async () => {
    //  Direct upgrade for free membership
    dispatch(setConfirmModalLoading(true));

    const res = await dashboardAPI.upgradeToFree();

    dispatch(setActiveConfirmModal(false));
    dispatch(setConfirmModalLoading(false));
    dispatch(getUserProfileAsync());

    if (/20[0-6]/g.test(res.status)) {
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: "Successfully upgraded to free membership",
        })
      );
    } else {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: "Sorry ! You can't buy this membership",
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getAllMembershipAsync());
  }, []);
  return (
    <>
      <Layout>
        <section className="s-space-bottom-full bg-accent-shadow-body">
          <div className="container">
            <div className="row pt-3">
              <div className="col-lg-3 col-md-3 col-12 d-none d-md-block">
                <Sidebar />
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="my-account-wrapper gradient-wrapper">
                  <div className="gradient-title">
                    <h2>Membership</h2>
                  </div>
                  <div className="p-2 py-3">
                    <Row>
                      {memberships &&
                        memberships.map((item) => (
                          <Col
                            key={`pricing-${item.id}`}
                            md={3}
                            sm={6}
                            xs={6}
                            className="p-2"
                          >
                            <PricingCard item={item} onUpgrade={onUpgrade} />
                          </Col>
                        ))}
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <UpgradeModal
        show={showUpgradeModal}
        setShow={setShowUpgradeModal}
        item={itemToUpgrade}
      />

      {/* ConfirmModal */}
      <ConfirmModal confirmHandler={onConfirm} />
    </>
  );
}
export default LoginRequired(Membership);
