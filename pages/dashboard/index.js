/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/dashboard/Sidebar";
import { dashboard_css } from "../../components/dashboard/styles";
import Dashboard from "../../components/dashboard/Dashboard";
import { getDashboardCountAsync } from "../../redux/dashboardSlice";
import LoginRequired from "../../components/RouteProtection/LoginRequired";

function DashboardHome() {
  const { dashboardCount } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardCountAsync());
  }, []);

  return (
    <Layout>
      <section
        className="s-space-bottom-full bg-accent-shadow-body"
        css={dashboard_css}
      >
        <div className="container">
          <div className="row pt-3">
            <div className="col-lg-3 col-md-4 col-12 d-none d-md-block">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="my-account-wrapper gradient-wrapper">
                <div>
                  <div className="row">
                    <div className="col-lg-12">
                      <Dashboard counts={dashboardCount} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default LoginRequired(DashboardHome);
