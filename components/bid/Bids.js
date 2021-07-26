/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx, css } from "@emotion/core";
import { Form, Row, Col, InputGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import adsAPI from "../../services/adsAPI";
import { i18n } from "../../i18n";

import { bids_css } from "./styles";
import SuccessModal from "../CommonModals/SuccessModal";
import { setActiveSuccessModal } from "../../redux/modalSlice";
import { getAdBidsAsync } from "../../redux/adSlice";
import UserDetailsModal from "./UserDetailsModal";

export default function Bids() {
  const { register, handleSubmit, errors, reset } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { adBids } = useSelector((state) => state.ads);

  const { adId } = router.query;

  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [showUserModal, setShowUserModal] = useState(false);

  const onShowUser = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  // const AlwaysScrollToBottom = () => {
  //   const elementRef = useRef();
  //   useEffect(() => elementRef.current.scrollIntoView());
  //   return <div ref={elementRef} />;
  // };

  const onSubmit = async (data) => {
    setLoading(true);

    if (!user.id) {
      router.push(`/login?next=${router.asPath}`);
    } else {
      const res = await adsAPI.postBid(adId, data);

      reset();

      setLoading(false);

      if (res !== undefined) {
        dispatch(
          setActiveSuccessModal({
            active: true,
            message: "Bid Posted successfully",
          })
        );

        dispatch(getAdBidsAsync(adId));
      }
    }
  };

  // const connectWebSocket = () => {
  //   const url = `ws://127.0.0.1:8000/ws/bids/${5}`;
  //   const bidSocket = new WebSocket(url);

  //   bidSocket.onopen = (e) => {
  //     bidSocket.send(JSON.stringify({ message: "new_bid" }));
  //   };

  //   bidSocket.onmessage = (e) => {
  //     console.log(e.data);
  //   };
  // };

  useEffect(() => {
    dispatch(getAdBidsAsync(adId));
  }, []);

  return (
    <div css={bids_css}>
      <Row>
        <Col sm={12}>
          <div className="comment-widgets">
            {adBids &&
              adBids.map((bid, i) => (
                <div key={i} className="d-flex flex-row comment-row">
                  <div>
                    <img
                      src={
                        bid?.user?.avatar
                          ? bid?.user?.avatar
                          : "/img/default-user.png"
                      }
                      alt="user"
                      style={{ width: "50px", height: "50px" }}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium mb-0">{bid.user.name}</h6>
                    <div className="text-muted">
                      {bid.created
                        ? moment(bid?.created).locale(i18n?.language).fromNow()
                        : ""}
                    </div>

                    <span className="bid-price">{bid.amount}</span>

                    {user?.id === bid?.user?.id && (
                      <button
                        className="btn btn-link  btn-secondary btn-sm p-0 px-1 text-white float-right"
                        onClick={() => onShowUser(bid?.user)}
                        disabled={loading}
                      >
                        Contact User
                      </button>
                    )}
                  </div>
                </div>
              ))}
            {/* <AlwaysScrollToBottom /> */}
          </div>
        </Col>
        <Col sm={12}>
          <div className="pt-1 border bg-primary text-white shadow">
            <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-0 mx-2">
                <InputGroup className="mb-1">
                  <Form.Control
                    as="input"
                    type="text"
                    placeholder="Bid here (max: 20)"
                    aria-label="Bid Amount"
                    name="amount"
                    ref={register({ required: "Required", maxLength: 20 })}
                    isInvalid={!!errors.amount}
                  />
                  <input
                    type="hidden"
                    name="ad"
                    value={adId}
                    ref={register({ required: "Required" })}
                  />
                  <InputGroup.Append>
                    <Button type="submit" variant="danger" disabled={loading}>
                      Submit{" "}
                      {loading && <Spinner animation="border" size="sm" />}
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>

      <SuccessModal />

      <UserDetailsModal
        show={showUserModal}
        setShow={setShowUserModal}
        user={selectedUser}
      />
    </div>
  );
}
