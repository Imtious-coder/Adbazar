/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Row, Col, Table } from "react-bootstrap";
import {
  FaCheckCircle,
  FaClock,
  FaEdit,
  FaExclamationTriangle,
} from "react-icons/fa";
import DasboardCard from "../Cards/DasboardCard";

import moment from "moment";

export default function Dashboard({ counts }) {
  return (
    <div css={dasboard_css}>
      <div className="gradient-wrapper item-mb border-none">
        <div className="gradient-title">
          <div className="row no-gutters">
            <h2 className="mb10--mb">Ads Information</h2>
          </div>
        </div>
        <div className="mt-2 p-2">
          <Row>
            <Col md={3} sm={6} xs={6}>
              <DasboardCard
                count_name="total ads"
                count={counts?.total_ads}
                icon={<FaEdit />}
                variant="primary"
              />
            </Col>
            <Col md={3} sm={6} xs={6}>
              <DasboardCard
                count_name="live ads"
                count={counts?.live_ads}
                icon={<FaCheckCircle />}
                variant="success"
              />
            </Col>
            <Col md={3} sm={6} xs={6}>
              <DasboardCard
                count_name="pending ads"
                count={counts?.pending_ads}
                icon={<FaClock />}
                variant="warning"
              />
            </Col>
            <Col md={3} sm={6} xs={6}>
              <DasboardCard
                count_name="Expired Ads"
                count={counts?.expired_ads}
                icon={<FaExclamationTriangle />}
                variant="danger"
              />
            </Col>
          </Row>
        </div>
        <div className="gradient-title mt-5">
          <div className="row no-gutters">
            <h2 className="mb10--mb">User Information</h2>
          </div>
        </div>

        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Membership</th>
              <th>Expire at</th>
              <th>Credit/Month</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="badge badge-primary p-2 fs-15">
                  {counts?.membership} Member
                </span>
              </td>
              <td>
                <span className="badge badge-info p-2">
                  {counts?.expires_at
                    ? moment(counts.expires_at).format("DD-MM-YYYY")
                    : "Never"}
                </span>
              </td>
              <td>
                <span className="badge badge-warning p-2">
                  {counts?.total_credit}
                </span>
              </td>
              <td>
                <span className="badge badge-danger p-2">
                  {counts?.membership_type === "free"
                    ? counts?.free_remaining
                    : counts?.paid_remaining}
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

const dasboard_css = css`
  td .badge {
    font-size: 15px;
  }
`;
