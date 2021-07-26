/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { setActiveCategorySearchModal } from "../../redux/modalSlice";
import { sidebar_css } from "../SideBar/styles";
import CategorySidebar from "../SideBar/CategorySidebar";

export default function CategorySearchModal() {
  const { activeCategorySearchModal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <Modal
      css={sidebar_css}
      show={activeCategorySearchModal}
      onHide={() => dispatch(setActiveCategorySearchModal(false))}
    >
      <Modal.Header closeButton>
        <Modal.Title>Select Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CategorySidebar />
      </Modal.Body>
    </Modal>
  );
}
