/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Form,
  Row,
  Col,
  ListGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import SellingTips from "../components/SellingTips/SellingTips";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../redux/modalSlice";

import chatAPI from "../services/chatAPI";

export default function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true);

    const res = await chatAPI.createNewContact(data);

    setLoading(false);

    if (res.status !== undefined && /20[0-6]/g.test(res.status)) {
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: "Thanks for contacting us. We will reach you soon.",
        })
      );
    } else {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: "Sorry ! Something went wrong !",
        })
      );
    }

    reset();
  };

  return (
    <Layout>
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <Container>
          <Row className="py-3">
            <Col md={9} className="p-1 p-md-2">
              <div className="gradient-wrapper mb--sm">
                <div className="gradient-title">
                  <h2>Contact us</h2>
                </div>
                <div className="p-2">
                  <div className="section-title-left-dark border-bottom pb-2">
                    <p className="mb-0">
                      If you did not find the answer to your question or
                      problem, please get in touch with us using the form below
                      and we will respond to your message as soon as possible.
                    </p>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <FaEnvelope size="16" /> myopenbd@gmail.com
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FaPhoneAlt size="16" /> +88017xxxxxxxx
                      </ListGroup.Item>
                    </ListGroup>
                    <div className="gradient-title mb-2">
                      <h2>Drop us a message</h2>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Control
                              name="name"
                              as="input"
                              type="text"
                              placeholder="Enter Your Name"
                              ref={register({ required: "This is required" })}
                              isInvalid={errors?.name}
                              disabled={loading}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors?.name?.message}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Control
                              as="input"
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              ref={register({
                                required: "This is required",
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              })}
                              isInvalid={errors?.email}
                              disabled={loading}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors?.email?.message}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows="5"
                          name="message"
                          placeholder="Write your message"
                          ref={register({ required: "This is required" })}
                          isInvalid={errors?.message}
                          disabled={loading}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.message?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button
                        type="submit"
                        variant="secondary"
                        disabled={loading}
                      >
                        Submit{" "}
                        {loading && <Spinner animation="border" size="sm" />}
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <SellingTips />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
