import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { logout } from "../../redux/authSlice";
import authAPI from "../../services/authAPI";
import { Modal, Button } from "react-bootstrap";
import {
  FaClipboardList,
  FaHeart,
  FaIdCardAlt,
  FaInfoCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

import { withTranslation } from "../../i18n";

function NavigationModal({ t, show, setShow }) {
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await authAPI.logout();
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link href="/dashboard">
                <a className="text-secondary">
                  <FaTachometerAlt size="16" color="teal" className="mr-1" />{" "}
                  {t("dashboard")}
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/dashboard/my-ads">
                <a className="text-secondary">
                  <FaClipboardList size="16" color="teal" className="mr-1" />{" "}
                  {t("my_ads")}
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="" href="/dashboard/favourite-ads">
                <a className="text-secondary">
                  <FaHeart size="16" color="teal" className="mr-1" />{" "}
                  {t("favourites")}
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/dashboard/membership">
                <a className="text-secondary">
                  <FaIdCardAlt size="16" color="teal" className="mr-1" />{" "}
                  {t("membership")}
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/dashboard/profile">
                <a className="text-secondary">
                  <FaInfoCircle size="16" color="teal" className="mr-1" />{" "}
                  {t("profile")}
                </a>
              </Link>
            </li>
            {user.id ? (
              <li className="list-group-item">
                <a href="#!" onClick={handleLogout} className="text-secondary">
                  <FaSignOutAlt size="16" color="teal" className="mr-1" />{" "}
                  {t("logout")}
                </a>
              </li>
            ) : (
              <li className="list-group-item">
                <Link href="/login">
                  <a className="text-secondary">
                    <FaSignInAlt size="16" color="teal" className="mr-1" />{" "}
                    {t("login")}
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            color="teal"
            size="sm"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
NavigationModal.getInitialProps = async () => ({
  namespacesRequired: ["dashboard_link"],
});

export default withTranslation("dashboard_link")(NavigationModal);
