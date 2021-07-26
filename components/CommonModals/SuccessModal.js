import SweetAlert from "react-bootstrap-sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSuccessModal } from "../../redux/modalSlice";

export default function SuccessModal() {
  const dispatch = useDispatch();
  const { activeSuccessModal, successMessage } = useSelector(
    (state) => state.modal
  );
  return (
    <SweetAlert
      type="success"
      title="Success!"
      btnSize="md"
      show={activeSuccessModal}
      onConfirm={() =>
        dispatch(setActiveSuccessModal({ active: false, message: "" }))
      }
    >
      {successMessage}
    </SweetAlert>
  );
}
