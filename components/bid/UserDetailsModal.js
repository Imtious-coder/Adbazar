import { Modal, Button, ListGroup } from "react-bootstrap";

export default function UserDetailsModal({ show, setShow, user }) {
  const onHide = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title as="h6">User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Name:</b> {user?.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Email:</b> {user?.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Phone Number:</b> {user?.phone_number}
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href={`tel:{user?.phone_number}`}
                className="btn btn-sm bg-primary-btn text-white"
              >
                Call
              </a>
              <a
                href={`sms:{user?.phone_number}`}
                className="btn btn-sm btn-danger text-white ml-2"
              >
                SMS
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
