/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { setActiveLocationSearchModal } from "../../redux/modalSlice";
import { sidebar_css } from "../SideBar/styles";
import LocationSidebar from "../SideBar/LocationSidebar";

export default function LocationSearchModal() {
  const { activeLocationSearchModal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <Modal
      css={sidebar_css}
      show={activeLocationSearchModal}
      onHide={() => dispatch(setActiveLocationSearchModal(false))}
    >
      <Modal.Header closeButton>
        <Modal.Title>Select Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LocationSidebar />
      </Modal.Body>
    </Modal>
  );
}
