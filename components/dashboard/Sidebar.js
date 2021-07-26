import Link from "next/link";
import {
  FaClipboardList,
  FaHeart,
  FaIdCardAlt,
  FaInfoCircle,
  FaTachometerAlt,
} from "react-icons/fa";

import { withTranslation } from "../../i18n";

function Sidebar({ t }) {
  return (
    <div className="gradient-wrapper sidebar-item-box">
      <div className="gradient-title">
        <h2>{t("account_menu")}</h2>
      </div>
      <ul className="list-group-flush">
        <li className="list-group-item">
          <Link href="/dashboard">
            <a>
              <FaTachometerAlt /> {t("dashboard")}
            </a>
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/dashboard/my-ads">
            <a>
              <FaClipboardList /> {t("my_ads")}
            </a>
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/dashboard/favourite-ads">
            <a>
              <FaHeart /> {t("favourites")}
            </a>
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/dashboard/profile">
            <a>
              <FaInfoCircle /> {t("profile")}
            </a>
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/dashboard/membership">
            <a>
              <FaIdCardAlt /> {t("membership")}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Sidebar.getInitialProps = async () => ({
  namespacesRequired: ["dashboard_link"],
});

export default withTranslation("dashboard_link")(Sidebar);
