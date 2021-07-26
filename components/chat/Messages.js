/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdDoneAll } from "react-icons/md";
import { Spinner } from "react-bootstrap";

export default function Messages({ chats, user }) {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() =>
      elementRef.current.scrollIntoView({
        block: "nearest",
      })
    );
    return <div ref={elementRef} />;
  };

  const { chatsRequestStatus } = useSelector((state) => state.chat);

  return (
    <div css={chat_message_css}>
      <div className="msg_history">
        <div className="text-center">
          {chatsRequestStatus === "pending" && <Spinner animation="border" />}
        </div>
        {chats &&
          chatsRequestStatus === "fulfilled" &&
          chats.map((chat) =>
            chat.user === user.id ? (
              <div key={`chat-${chat.id}`} className="outgoing_msg">
                <div className="sent_msg">
                  <p>{chat.message}</p>
                  <span className="time_date">
                    {new Date(chat.created).toLocaleTimeString("en-AU", {
                      timeStyle: "short",
                    })}
                    , {new Date(chat.created).toLocaleDateString("en-AU")}
                    <MdDoneAll
                      size="16"
                      className={
                        chat?.is_read
                          ? "ml-2 text-forest"
                          : "ml-2 text-secondary"
                      }
                    />
                  </span>
                </div>
              </div>
            ) : (
              <div key={`chat-${chat.id}`} className="incoming_msg">
                <div className="incoming_msg_img">
                  <img src="/img/user-profile.png" alt="sunil" />{" "}
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>{chat.message}</p>
                    <span className="time_date">
                      {new Date(chat.created).toLocaleTimeString("en-AU", {
                        timeStyle: "short",
                      })}
                      , {new Date(chat.created).toLocaleDateString("en-AU")}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        {AlwaysScrollToBottom()}
      </div>
    </div>
  );
}

const chat_message_css = css`
  .msg_history {
    height: calc(75vh);
    overflow-y: auto;
    padding: 20px;
  }
  .time_date {
    color: #747474;
    display: block;
    font-size: 12px;
    margin: 8px 0 0;
  }
  .received_withd_msg {
    width: 57%;
  }
  .mesgs {
    padding: 20px 20px 0px 5px;
  }

  .sent_msg p {
    background: #139e81 none repeat scroll 0 0;
    border-radius: 3px;
    font-size: 14px;
    margin: 0;
    color: #fff;
    padding: 5px 10px 5px 12px;
    width: 100%;
  }
  .outgoing_msg {
    overflow: hidden;
    margin: 10px 0 10px;
  }
  .sent_msg {
    float: right;
    width: 46%;
  }
  .incoming_msg {
    margin: 15px 0px;
  }
  .incoming_msg_img {
    display: inline-block;
    width: 30px;
    height: 30px;
  }
  .received_msg {
    display: inline-block;
    padding: 0 0 0 10px;
    vertical-align: top;
    width: 92%;
  }
  .received_withd_msg p {
    background: #ebebeb none repeat scroll 0 0;
    border-radius: 3px;
    color: #646464;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 100%;
  }
`;
