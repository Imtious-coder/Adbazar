import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Spinner, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getAllPaymentMethodAsync } from "../../../redux/dashboardSlice";
import dashboardAPI from "../../../services/dashboardAPI";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../../../redux/modalSlice";

export default function UpgradeModal({ show, setShow, item }) {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState({});

  const { register, handleSubmit, errors, reset } = useForm();

  const { paymentMethods } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  const onHide = () => {
    reset();
    setShow(false);
    setSelectedMethod({});
  };

  const onSelect = (id) => {
    setSelectedMethod(paymentMethods.find((item) => item.id == id));
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const res = await dashboardAPI.buyMembership(data);

    setLoading(false);

    onHide();

    if (res !== undefined && res.id) {
      //  Show Success Modal
      dispatch(
        setActiveSuccessModal({
          active: true,
          message:
            "Your membership request is placed successfully. Please wait for the confirmation",
        })
      );
    } else {
      // Show Error Modal
      dispatch(
        setActiveErrorModal({
          active: true,
          message: "Error upgrading membership",
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getAllPaymentMethodAsync());
  }, []);

  return (
    <Modal show={show} onHide={onHide}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>({item?.name}) Membership</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              name="payment_method"
              onChange={(e) => onSelect(e.target.value)}
              ref={register({ required: true })}
              disabled={loading}
              isInvalid={!!errors.payment_method}
            >
              <option value="">Select Payment Method</option>
              {paymentMethods &&
                paymentMethods.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>

          {selectedMethod && selectedMethod.id && (
            <blockquote className="border border-danger p-2">
              <h3 className="text-secondary m-0">
                Account: {selectedMethod?.account}
              </h3>
              <h3 className="text-secondary m-0">
                Payable amount: {item?.price} BDT
              </h3>
              {selectedMethod?.message}
            </blockquote>
          )}
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="transaction_number"
              ref={register({ required: true })}
              disabled={loading}
              isInvalid={!!errors.transaction_number}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Transaction ID</Form.Label>
            <Form.Control
              type="text"
              name="transaction_id"
              ref={register({ required: true })}
              disabled={loading}
              isInvalid={!!errors.transaction_id}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Contact Number</Form.Label>
            <Form.Control
              type="number"
              name="contact_number"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^(?:\+?88|0088)?01[15-9]\d{8}$/i,
                },
              })}
              disabled={loading}
              isInvalid={!!errors.contact_number}
            />
          </Form.Group>
          <input
            type="hidden"
            name="package"
            value={item.id}
            ref={register({ required: true })}
            disabled={loading}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={loading}>
            Cancel
          </Button>
          <Button variant="success" type="submit" disabled={loading}>
            Submit{" "}
            {loading && (
              <Spinner variant="light" size="sm" animation="border" />
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
