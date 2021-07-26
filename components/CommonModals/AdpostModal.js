import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import { setActiveAdpostModal } from "../../redux/modalSlice";

import { withTranslation } from "../../i18n";

function AdpostModal({ t }) {
  const dispatch = useDispatch();

  const { activeAdpostModal } = useSelector((state) => state.modal);

  const onHide = () => {
    dispatch(setActiveAdpostModal(false));
  };

  return (
    <Modal show={activeAdpostModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title as="h6">{t("heading")}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ fontSize: "15px" }}>
        <ListGroup variant="flush">
          <ListGroupItem className="text-center">
            <span className="text-dark border-bottom">
              <span className="border-bottom">{t("sell_item")}</span>
            </span>
          </ListGroupItem>

          <ListGroupItem>
            <Link href="/listing/post-ad?type=general">
              <a onClick={onHide} className="text-dark">
                {t("sell_item_service")}
              </a>
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link href="/listing/post-ad?ad_type=rent">
              <a onClick={onHide} className="text-dark">
                {t("rent_something")}
              </a>
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link href="/listing/post-ad?ad_type=auction">
              <a onClick={onHide} className="text-dark">
                {t("auction_something")}
              </a>
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link href="/listing/post-ad?ad_type=exchange">
              <a onClick={onHide} className="text-dark">
                {t("exchange_something")}
              </a>
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link href="/listing/post-ad?type=job">
              <a onClick={onHide} className="text-dark">
                {t("post_job")}
              </a>
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <a className="text-dark" href="#!" onClick={onHide}>
              {t("bride_groom")}
            </a>
          </ListGroupItem>

          <ListGroupItem className="text-center">
            <span className="text-dark border-bottom">
              <span className="border-bottom">{t("buy_item")}</span>
            </span>
          </ListGroupItem>
          <ListGroupItem>
            <Link href="/listing/post-ad?ad_type=to_buy">
              <a onClick={onHide} className="text-dark">
                {t("look_for_buy")}
              </a>
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link href="/listing/post-ad?ad_type=to_rent">
              <a onClick={onHide} className="text-dark">
                {t("look_for_rent")}
              </a>
            </Link>
          </ListGroupItem>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AdpostModal.getInitialProps = async () => ({
  namespacesRequired: ["adpost-modal"],
});

export default withTranslation("adpost-modal")(AdpostModal);
