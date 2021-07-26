import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import { useForm } from "react-hook-form";
import authAPI from "../services/authAPI";
import SuccessModal from "../components/CommonModals/SuccessModal";
import ErrorModal from "../components/CommonModals/ErrorModal";
import {
  setActiveSuccessModal,
  setActiveErrorModal,
  setActiveAdpostModal,
} from "../redux/modalSlice";

import { withTranslation } from "../i18n";

function Register({ t }) {
  const { handleSubmit, register, reset, errors } = useForm();
  const [showPassword, setShowpassword] = useState(false);
  const [registrationError, setRegistartionError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const onPostAd = () => {
    dispatch(setActiveAdpostModal(true));
  };

  const onSubmit = async (formData) => {
    setLoading(true);
    setRegistartionError("");

    const res = await authAPI.register(formData);

    setLoading(false);

    if (/20[0-6]/g.test(res.status)) {
      // Reset Form
      reset();
      // Rediret to login page
      router.push("/login");

      // Show Success Modal
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: t("success_msg"),
        })
      );
    } else {
      const { email, phone_number } = res.response.data;

      if (email !== undefined && email.length > 0) {
        setRegistartionError(t("email_taken"));
      }
      if (phone_number !== undefined && phone_number.length > 0) {
        setRegistartionError(t("phone_number_taken"));
      }
      // Show Error Modal
      dispatch(
        setActiveErrorModal({
          active: true,
          message: registrationError,
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
                  <h2>{t("heading")}</h2>
                </div>
                <div className="gradient-padding">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Label>{t("your_name")} *</Form.Label>
                      <Form.Control
                        ref={register({
                          required: "Required",
                        })}
                        type="text"
                        name="name"
                        placeholder={t("your_name")}
                        isInvalid={!!errors.name}
                        disabled={loading}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>{t("phone_number")} *</Form.Label>
                      <Form.Control
                        ref={register({
                          required: "Required",
                          pattern: {
                            value: /^(?:\+?88|0088)?01[15-9]\d{8}$/i,
                          },
                        })}
                        type="text"
                        name="phone_number"
                        placeholder={t("phone_number")}
                        isInvalid={!!errors.phone_number}
                        disabled={loading}
                      />
                      <Form.Control.Feedback type="invalid">
                        {t("invalid_phone")}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>{t("email_if_any")}</Form.Label>
                      <Form.Control
                        ref={register({
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                        type="email"
                        name="email"
                        placeholder={t("email_placeholder")}
                        isInvalid={!!errors.email}
                        disabled={loading}
                      />
                      <Form.Control.Feedback type="invalid">
                        {t("invalid_email")}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>{t("password")} *</Form.Label>
                      <Form.Control
                        ref={register({
                          required: "Required",
                        })}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder={t("password")}
                        disabled={loading}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label={t("show_password")}
                        onChange={() => setShowpassword(!showPassword)}
                        disabled={loading}
                      />
                    </Form.Group>
                    <Button type="submit" className="bg-primary-btn">
                      {t("register_link")}{" "}
                      {loading && <Spinner animation="border" size="sm" />}
                    </Button>
                    <p className="mt-2">
                      {t("have_account")}{" "}
                      <Link href="/login">
                        <a>{t("login")}</a>
                      </Link>
                    </p>
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sidebar-item-box">
                <ul className="sidebar-more-option">
                  <li>
                    <a href="#!" onClick={onPostAd}>
                      <img
                        src="img/banner/more1.png"
                        alt="more"
                        className="img-fluid"
                      />
                      Post a Free Ad
                    </a>
                  </li>
                  <li>
                    <Link href="/dashboard/my-ads/">
                      <a>
                        <img
                          src="img/banner/more2.png"
                          alt="more"
                          className="img-fluid"
                        />
                        Manage Product
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/favourite-ads">
                      <a>
                        <img
                          src="img/banner/more3.png"
                          alt="more"
                          className="img-fluid"
                        />
                        Favorite Ad list
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* SuccessAlert */}
      <SuccessModal />
      {/* Error Modal */}
      <ErrorModal />
    </Layout>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ["register"],
});
export default withTranslation("register")(Register);
