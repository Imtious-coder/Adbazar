import { Modal, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdSms } from "react-icons/md";

export default function CallModal({ ad, show, setShow }) {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title as="h5">Contact {ad?.user?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group list-group-flush">
            {ad.hide_phone ? (
              <li>Phone number hidden</li>
            ) : (
              ad?.ad_phone_numbers?.map((item, i) => (
                <li
                  key={`phone-${i}`}
                  className="list-group-item d-flex justify-content-between"
                >
                  <b className="text-dark">{item.phone}</b>
                  <div>
                    <a href={`sms:${item.phone}`} className="mr-4">
                      <MdSms color="teal" size="20" />
                    </a>
                    <a href={`tel:${item.phone}`}>
                      <FaPhoneAlt color="teal" size="20" />
                    </a>
                  </div>
                </li>
              ))
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
