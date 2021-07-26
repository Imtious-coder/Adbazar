/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Row, Col, Button } from "react-bootstrap";
import { FaComment, FaPhoneAlt } from "react-icons/fa";

export default function AdDetailActionButtons({ onChat, onCall }) {
  return (
    <div css={action_button_styles}>
      <Row className="action-btn-wrapper d-md-none">
        <Col>
          <Button
            variant="info"
            className="bg-primary-btn"
            size="sm"
            block
            onClick={onCall}
          >
            <FaPhoneAlt /> Call
          </Button>
        </Col>
        <Col>
          <Button
            variant="info"
            className="bg-primary-btn"
            size="sm"
            block
            onClick={onChat}
          >
            <FaComment /> Chat
          </Button>
        </Col>
      </Row>
    </div>
  );
}

const action_button_styles = css`
  .action-btn-wrapper {
    position: fixed;
    bottom: 55px;
    margin: 0 auto;
    width: 100%;
    z-index: 10;
  }
  button {
    padding: 6px 0px;
  }
`;
