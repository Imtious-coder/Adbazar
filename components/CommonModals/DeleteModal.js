/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActiveDeleteModal } from "../../redux/modalSlice";

const DeleteModal = ({ confirmHandler }) => {
  const { activeDeleteModal, deleteModalLoading } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setActiveDeleteModal(false));

  return (
    <div>
      <Modal
        show={activeDeleteModal}
        onHide={handleClose}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This record will be gone forever!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={deleteModalLoading}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={confirmHandler}
            disabled={deleteModalLoading}
          >
            Delete
            {deleteModalLoading && (
              <Spinner variant="light" size="sm" animation="border" />
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;
