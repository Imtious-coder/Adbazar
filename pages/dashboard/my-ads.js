/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/dashboard/Sidebar";
import { dashboard_css } from "../../components/dashboard/styles";
import MyAds from "../../components/dashboard/MyAds";
import LoginRequired from "../../components/RouteProtection/LoginRequired";

function DashboardAds() {
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
                      <MyAds />
                      {/* <div className="gradient-wrapper mb--xs mb-30 border-none">
                        <ul className="cp-pagination">
                          <li className="disabled">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-left"
                                aria-hidden="true"
                              ></i>
                              Previous
                            </a>
                          </li>
                          <li className="active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">4</a>
                          </li>
                          <li>
                            <a href="#">5</a>
                          </li>
                          <li>
                            <a href="#">6</a>
                          </li>
                          <li>
                            <a href="#">
                              Next
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div> */}
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
export default LoginRequired(DashboardAds);
