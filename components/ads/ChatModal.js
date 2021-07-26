/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  ListGroup,
  Media,
  Spinner,
} from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { humanize } from "humanize";
import { useForm } from "react-hook-form";
import moment from "moment";
import { i18n } from "../../i18n";
import chatAPI from "../../services/chatAPI";

export default function ChatModal({ ad, show, setShow }) {
  const { register, handleSubmit, errors, reset } = useForm();

  const [chats, setChats] = useState([]);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // Send message via api call
    setLoading(true);

    const res = await chatAPI.createNewChannel({
      ad: ad.id,
      receiver: ad.user.id,
    });

    const chat_res = await chatAPI.createNewChat({
      channel: res.id,
      message: data.message,
    });

    reset();

    setLoading(false);

    setChats([chat_res, ...chats]);
  };

  const onHide = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Chat with {ad?.user?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Media>
          <img
            style={{ width: "100px", height: "80px" }}
            className="mr-3"
            src={ad?.ad_images?.length > 0 ? ad.ad_images[0].image : ""}
            alt="404"
          />
          <Media.Body>
            <h6>{ad.ad_title}</h6>
            <p>
              {ad?.location?.name},{" "}
              {ad?.subcategory ? ad?.subcategory?.name : ad?.category?.name}
              <br />
              <span className="text-danger font-weight-bold">
                ৳ {humanize.numberFormat(ad.price, [0])}
              </span>
            </p>
          </Media.Body>
        </Media>
        <ListGroup
          variant="flush"
          style={{ height: "250px", overflowY: "scroll" }}
        >
          {chats.map((item) => (
            <ListGroup.Item key={item.id} variant="secondary">
              {item.message} <br />
              {item.created
                ? moment(item?.created).locale(i18n?.language).fromNow()
                : ""}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                placeholder="Write your message"
                ref={register({ required: true })}
                name="message"
                isInvalid={errors.message}
                disabled={loading}
              />
              <InputGroup.Append>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <Spinner variant="light" size="sm" animation="border" />
                  ) : (
                    <FaPaperPlane transform="rotate(45)" />
                  )}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
