/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Spinner } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import SuccessModal from "../../../CommonModals/SuccessModal";
import ErrorModal from "../../../CommonModals/ErrorModal";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../../../../redux/modalSlice";
import authAPI from "../../../../services/authAPI";

export default function PasswordChangeForm() {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, errors, watch } = useForm();

  const new_password = useRef({});
  new_password.current = watch("new_password", "");

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    setLoading(true);
    const res = await authAPI.changePassword(formData);
    setLoading(false);
    if (/20[0-6]/g.test(res.status)) {
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: "Password Changed Successfully",
        })
      );
    } else {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: "Error Updating Password. Old password is incorrect.",
        })
      );
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Old Password:</Form.Label>
          <Form.Control
            ref={register({ required: true })}
            type="password"
            name="old_password"
            placeholder="Your old password"
            disabled={loading}
            isInvalid={!!errors.old_password}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>New Password:</Form.Label>
          <Form.Control
            ref={register({ required: true })}
            type="password"
            name="new_password"
            placeholder="New password"
            disabled={loading}
            isInvalid={!!errors.new_password}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            placeholder="Confirm new password"
            disabled={loading}
            ref={register({
              validate: (value) =>
                value === new_password.current || "The passwords do not match",
            })}
            isInvalid={!!errors.confirm_password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirm_password && errors.confirm_password.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="bg-primary-btn btn-block"
          disabled={loading}
        >
          <FaPencilAlt /> Change Password{" "}
          {loading && <Spinner animation="border" size="sm" />}
        </Button>
      </Form>
    </div>
  );
}
