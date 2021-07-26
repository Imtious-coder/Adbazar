/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Spinner } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import AvatarUploader from "../../../AvatarUploader/AvatarUploader";
import authAPI from "../../../../services/authAPI";
import { setUser } from "../../../../redux/authSlice";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../../../../redux/modalSlice";

export default function ProfileUpdateForm() {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    setLoading(true);
    const res = await authAPI.updateProfile(formData);
    setLoading(false);

    if (/20[0-6]/g.test(res.status)) {
      dispatch(setUser(res.data));
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: "Profile Updated Successfully",
        })
      );
    } else {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: "Error Updating Profile",
        })
      );
    }
  };

  const onUpload = async (file) => {
    if (file) {
      const formData = new FormData();

      formData.append("avatar", file);

      setLoading(true);
      const res = await authAPI.updateProfile(formData);
      setLoading(false);

      if (/20[0-6]/g.test(res.status)) {
        dispatch(setUser(res.data));
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AvatarUploader
          imageURL={user?.avatar}
          handler={onUpload}
          loading={loading}
        />

        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            ref={register({ required: true })}
            type="text"
            name="name"
            placeholder="Your Name"
            disabled={loading}
            defaultValue={user.name || ""}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.phone_number || ""}
            disabled={true}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            ref={register({
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
            type="text"
            name="email"
            placeholder="Your Email"
            defaultValue={user.email || ""}
            disabled={loading}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            Invalid Email Address
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          type="submit"
          className="bg-primary-btn btn-block"
          disabled={loading}
        >
          <FaUserEdit /> Update Profile{" "}
          {loading && <Spinner animation="border" size="sm" />}
        </Button>
      </Form>
    </div>
  );
}
