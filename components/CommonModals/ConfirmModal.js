/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActiveConfirmModal } from "../../redux/modalSlice";

const ConfirmModal = ({ confirmHandler }) => {
  const { activeConfirmModal, confirmModalLoading } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setActiveConfirmModal(false));

  return (
    <div>
      <Modal
        show={activeConfirmModal}
        onHide={handleClose}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This can not be undone!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={confirmModalLoading}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={confirmHandler}
            disabled={confirmModalLoading}
          >
            Confirm
            {confirmModalLoading && (
              <Spinner variant="light" size="sm" animation="border" />
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
