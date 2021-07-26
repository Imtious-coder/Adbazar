/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { setActiveLocationModal } from "../../redux/modalSlice";
import { sidebar_css } from "../SideBar/styles";
import LocationSelect from "./CollapsibleSelect/LocationSelect";

export default function LocationModal() {
  const { activeLocationModal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <Modal
      css={sidebar_css}
      show={activeLocationModal}
      onHide={() => dispatch(setActiveLocationModal(false))}
    >
      <Modal.Header closeButton>
        <Modal.Title>Select Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LocationSelect />
      </Modal.Body>
    </Modal>
  );
}
