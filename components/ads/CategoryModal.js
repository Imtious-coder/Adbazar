/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import CategorySelect from "./CollapsibleSelect/CategorySelect";
import { setActiveCategoryModal } from "../../redux/modalSlice";
import { sidebar_css } from "../SideBar/styles";

export default function CategoryModal() {
  const { activeCategoryModal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <Modal
      css={sidebar_css}
      show={activeCategoryModal}
      onHide={() => dispatch(setActiveCategoryModal(false))}
    >
      <Modal.Header closeButton>
        <Modal.Title>Select Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CategorySelect />
      </Modal.Body>
    </Modal>
  );
}
