/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import SuccessModal from "../../components/CommonModals/SuccessModal";
import ErrorModal from "../../components/CommonModals/ErrorModal";
import Layout from "../../components/Layout/Layout";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../../redux/modalSlice";
import authAPI from "../../services/authAPI";

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, errors, watch, reset } = useForm();

  const new_password = useRef({});
  new_password.current = watch("new_password", "");

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async ({ new_password }) => {
    setLoading(true);

    const res = await authAPI.passwordResetConfirm({
      token: router.query["token"],
      password: new_password,
    });

    setLoading(false);
    reset();

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
          message: res.response
            ? res.response.data.password
              ? res.response.data.password.join("\n")
              : "Invalid Token"
            : "Error Updating Password",
        })
      );
    }
  };

  return (
    <Layout>
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <Container>
          <Row className="py-3">
            <Col md={8}>
              <div className="gradient-wrapper mb--sm">
                <div className="gradient-title">
                  <h2>Change Your Account Password</h2>
                </div>
                <div className="gradient-padding">
                  <Form onSubmit={handleSubmit(onSubmit)}>
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
                            value === new_password.current ||
                            "The passwords do not match",
                        })}
                        isInvalid={!!errors.confirm_password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirm_password &&
                          errors.confirm_password.message}
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
              </div>
            </Col>
            <Col md={4}>
              <div className="sidebar-item-box">
                <ul className="sidebar-more-option">
                  <li>
                    <a href="post-ad.html">
                      <img
                        src="/img/banner/more1.png"
                        alt="more"
                        className="img-fluid"
                      />
                      Post a Free Ad
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="/img/banner/more2.png"
                        alt="more"
                        className="img-fluid"
                      />
                      Manage Product
                    </a>
                  </li>
                  <li>
                    <a href="favourite-ad-list.html">
                      <img
                        src="/img/banner/more3.png"
                        alt="more"
                        className="img-fluid"
                      />
                      Favorite Ad list
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-item-box">
                <img
                  src="/img/banner/sidebar-banner1.jpg"
                  alt="banner"
                  className="img-fluid m-auto"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Success Alert */}
      <SuccessModal />
      {/* Error Alert */}
      <ErrorModal />
    </Layout>
  );
}
