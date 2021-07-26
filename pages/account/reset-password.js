import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authAPI from "../../services/authAPI";
import { login } from "../../redux/authSlice";
import SuccessModal from "../../components/CommonModals/SuccessModal";
import { setActiveSuccessModal } from "../../redux/modalSlice";

export default function ResetPassword() {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    setLoading(true);

    const res = await authAPI.passwordResetRequest(formData);

    setLoading(false);

    dispatch(
      setActiveSuccessModal({
        active: true,
        message: "Check your email for password reset instruction.",
      })
    );
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
                  <h2>Reset your password</h2>
                </div>
                <div className="gradient-padding">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Label>Email Address:</Form.Label>
                      <Form.Control
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                        type="email"
                        name="email"
                        placeholder="Your Email address"
                        isInvalid={!!errors.email}
                        disabled={loading}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="bg-primary-btn"
                      disabled={loading}
                    >
                      Submit{" "}
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
      {/* Success Modal */}
      <SuccessModal />
    </Layout>
  );
}
