import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authAPI from "../services/authAPI";
import { login } from "../redux/authSlice";
import ErrorModal from "../components/CommonModals/ErrorModal";
import { setActiveAdpostModal, setActiveErrorModal } from "../redux/modalSlice";

import { withTranslation } from "../i18n";

function Login({ t }) {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const { next } = router.query;

  const onPostAd = () => {
    dispatch(setActiveAdpostModal(true));
  };

  const onSubmit = async (formData) => {
    setLoading(true);

    const res = await authAPI.login(formData);

    if (res.status !== undefined && /20[0-6]/g.test(res.status)) {
      dispatch(login(res.data));

      setTimeout(() => {
        if (next !== undefined && next !== "") {
          router.push(next);
        } else {
          router.push("/");
        }
      }, 1000);
    } else {
      setLoading(false);

      const errorMessage = res.response
        ? t("invalid_creds")
        : t("something_wrong");
      dispatch(setActiveErrorModal({ active: true, message: errorMessage }));
    }
  };

  // useEffect(() => {
  //   if (user.id) {
  //     router.push("/dashboard");
  //   }
  // }, []);

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
                      <Form.Label>{t("phone_or_email")}</Form.Label>
                      <Form.Control
                        ref={register({ required: true })}
                        type="text"
                        name="username"
                        placeholder={t("phone_or_email")}
                        disabled={loading}
                        isInvalid={!!errors.username}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>{t("password")}</Form.Label>
                      <Form.Control
                        ref={register({ required: true })}
                        type="password"
                        name="password"
                        placeholder={t("password")}
                        disabled={loading}
                        isInvalid={!!errors.password}
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      className="bg-primary-btn"
                      disabled={loading}
                    >
                      {t("login")}{" "}
                      {loading && <Spinner animation="border" size="sm" />}
                    </Button>
                    <p className="mt-2">
                      {t("no_account")} ?{" "}
                      <Link href="/register">{t("register_link")}</Link> <br />{" "}
                      {t("forget_password")} ?{" "}
                      <Link href="account/reset-password">
                        {t("reset_link")}
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
      {/* Error Modal */}
      <ErrorModal />
    </Layout>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ["login"],
});

export default withTranslation("login")(Login);
