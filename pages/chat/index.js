/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Spinner,
} from "react-bootstrap";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ChatListItem from "../../components/chat/ChatListItem";
import Layout from "../../components/Layout/Layout";

import LoginRequired from "../../components/RouteProtection/LoginRequired";

import {
  getChannlesAsync,
  getChatsByChannelAsync,
} from "../../redux/chatSlice";
import Messages from "../../components/chat/Messages";
import chatAPI from "../../services/chatAPI";

const ChatPage = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [selectedChannel, setSelectedChannel] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const { channels, chats } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const onChannelSelect = (channel_id) => {
    setSelectedChannel(channel_id);
    setShowChat(true);
    dispatch(getChatsByChannelAsync(channel_id));
  };

  // Handle Back Click
  const onBackClick = () => {
    setShowChat(false);
  };

  const onSubmit = async (data) => {
    setLoading(true);

    await chatAPI.createNewChat(data);

    setLoading(false);

    onChannelSelect(data.channel);

    reset();
  };

  useEffect(() => {
    dispatch(getChannlesAsync());
  }, []);

  useEffect(() => {
    if (channels[0]?.id !== undefined) {
      onChannelSelect(channels[0]?.id);
      setShowChat(false);
    }
  }, [channels]);

  return (
    <Layout>
      <section className="s-space-bottom-full bg-accent-shadow-body py-3">
        <Container className="p-0">
          <div css={chat_css}>
            <div className="gradient-wrapper mb--sm">
              <div className="gradient-title">
                <h2>
                  {showChat && (
                    <span className="mr-3 d-md-none" onClick={onBackClick}>
                      <FaArrowLeft />
                    </span>
                  )}
                  Chat
                </h2>
              </div>

              <div className="messaging">
                <div className="inbox_msg ">
                  <Row>
                    <Col md={5} className={showChat ? "d-none d-md-block" : ""}>
                      <div className="inbox_people">
                        <div className="headind_srch">
                          <div className="recent_heading">
                            <h4>Recent</h4>
                          </div>
                        </div>
                        <div className="inbox_chat">
                          {channels &&
                            channels.map((item) => (
                              <ChatListItem
                                key={`channel-${item.id}`}
                                channel={item}
                                onChannelSelect={onChannelSelect}
                                selectedChannel={selectedChannel}
                                user={user}
                              />
                            ))}
                        </div>
                      </div>
                    </Col>
                    <Col md={7} className={showChat ? "" : "d-none d-md-block"}>
                      <div className="mb-4">
                        <Messages chats={chats} user={user} />
                      </div>

                      <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="chat-form"
                      >
                        <Form.Group>
                          <InputGroup className="mb-3">
                            <Form.Control
                              as="input"
                              type="text"
                              placeholder="Write your message"
                              name="message"
                              ref={register({ required: "Required" })}
                              isInvalid={!!errors.message}
                              disabled={loading}
                            />
                            <input
                              type="hidden"
                              name="channel"
                              value={selectedChannel || ""}
                              ref={register({ required: true })}
                            />

                            <InputGroup.Append>
                              <button
                                type="submit"
                                className="btn bg-primary-btn px-3 mr-md-3"
                                disabled={loading}
                              >
                                {loading ? (
                                  <Spinner animation="border" size="sm" />
                                ) : (
                                  <FaPaperPlane
                                    color="white"
                                    transform="rotate(45)"
                                  />
                                )}
                              </button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default LoginRequired(ChatPage);

const chat_css = css`
  img {
    max-width: 100%;
  }
  .inbox_people {
    background: #f8f8f8 none repeat scroll 0 0;
    border-right: 1px solid #c4c4c4;
  }
  .inbox_msg {
    border: 1px solid #c4c4c4;
    clear: both;
    overflow: hidden;
  }

  .headind_srch {
    padding: 10px 29px 10px 20px;
    overflow: hidden;
    border-bottom: 1px solid #c4c4c4;
  }

  .recent_heading h4 {
    color: #139e81;
    font-size: 21px;
    margin: auto;
  }

  .chat_ib h5 {
    font-size: 15px;
    color: #464646;
    margin: 0 0 8px 0;
  }
  .chat_ib h5 span {
    font-size: 13px;
    float: right;
  }
  .chat_ib p {
    font-size: 14px;
    color: #989898;
    margin: auto;
  }

  .chat_ib {
    float: left;
    padding: 0 0 0 15px;
    width: 88%;
  }

  .inbox_chat {
    height: 75vh;
    overflow-y: scroll;
  }

  .messaging {
    padding: 0 0 50px 0;
  }
  .chat-form {
    position: absolute;
    width: 100%;
    padding: 0px 40px 0px 10px;
    bottom: 0px;
  }
`;
