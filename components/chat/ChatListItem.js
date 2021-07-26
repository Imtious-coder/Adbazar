/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FaCircle } from "react-icons/fa";

export default function ChatListItem({
  channel,
  onChannelSelect,
  selectedChannel,
  user,
}) {
  return (
    <div css={chat_list_css}>
      <div
        className={
          selectedChannel == channel.id ? "chat_list active_chat" : "chat_list"
        }
        onClick={() => onChannelSelect(channel.id)}
      >
        <div className="chat_people">
          <div className="chat_img">
            <img
              src={
                channel?.ad_details?.ad_images?.length > 0
                  ? channel?.ad_details?.ad_images[0].image
                  : "/img/default-user.png"
              }
              alt={`image-${channel.id}`}
            />

            {user.id == channel.sender ? (
              channel?.receiver_unread > 0 ? (
                <span className="chat_count">
                  <FaCircle color="red" />
                </span>
              ) : (
                ""
              )
            ) : channel?.sender_unread > 0 ? (
              <span className="chat_count">
                <FaCircle color="red" />
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="chat_ib">
            <h5>
              {user.id == channel.sender
                ? channel?.receiver_details?.name
                : channel?.sender_details?.name}
              <span className="chat_date">
                {new Date(channel?.updated).toLocaleString("nz")}
              </span>
            </h5>
            <p>{channel?.ad_details?.ad_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const chat_list_css = css`
  .chat_list {
    border-bottom: 1px solid #c4c4c4;
    margin: 0;
    padding: 10px 10px;
    cursor: pointer;
  }
  .chat_list:hover {
    background: #dbdbdb;
  }
  .inbox_chat {
    height: 550px;
    overflow-y: scroll;
  }
  .active_chat {
    background: #dbdbdb;
  }
  .chat_people {
    overflow: hidden;
    clear: both;
  }
  .chat_img {
    float: left;
    width: 11%;
    position: relative;
  }
  .chat_img img {
    border-radius: 50%;
    width: 50px;
    height: 40px;
  }
  .chat_count {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
  }
`;
