import SweetAlert from "react-bootstrap-sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { setActiveErrorModal } from "../../redux/modalSlice";

export default function ErrorModal() {
  const dispatch = useDispatch();
  const { activeErrorModal, errorMessage } = useSelector(
    (state) => state.modal
  );
  return (
    <SweetAlert
      type="error"
      title="Error!"
      btnSize="md"
      show={activeErrorModal}
      onConfirm={() =>
        dispatch(setActiveErrorModal({ active: false, message: "" }))
      }
    >
      {errorMessage}
    </SweetAlert>
  );
}
