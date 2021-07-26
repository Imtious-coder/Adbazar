import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { getLocationsAsync, setLocation } from "../../redux/sidebarSlice";
import { setActiveLocationSearchModal } from "../../redux/modalSlice";
import { getAdsAsync } from "../../redux/adSlice";
import { withTranslation, i18n } from "../../i18n";

function LocationSidebar({ t }) {
  const { allLocation: locations } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const router = useRouter();

  const params = { limit: 20, offset: 0 };

  const handleLocationClick = (e, item, key) => {
    e.preventDefault();

    // Hide Modal for searchbar
    dispatch(setActiveLocationSearchModal(false));

    // Set Selected Location
    dispatch(setLocation(item));

    delete router.query["user"];
    delete router.query["location__slug"];
    delete router.query["location__location__slug"];

    dispatch(getAdsAsync({ ...params, ...router.query, [key]: item.slug }));

    router
      .push({ pathname: "/", query: { ...router.query, [key]: item.slug } })
      .then(() => window.scrollTo(0, 0));
  };

  const handleAllLocationClick = (e) => {
    e.preventDefault();
    // Hide Modal for searchbar
    dispatch(setActiveLocationSearchModal(false));
    dispatch(setLocation({}));

    delete router.query["user"];
    delete router.query["location__slug"];
    delete router.query["location__location__slug"];

    dispatch(getAdsAsync({ ...params, ...router.query }));
  };

  useEffect(() => {
    dispatch(getLocationsAsync());
  }, []);

  const renderLocation = () => {
    return (
      locations &&
      locations.map((item, i) => {
        return (
          <div key={i}>
            <Accordion.Toggle as="li" eventKey={item.id}>
              <a href="#/" className="d-flex justify-content-between">
                <span>
                  <FaMapMarkerAlt className="text-forest" /> {item.name}
                </span>
                <span>
                  {" "}
                  ({Number(item.ad_count).toLocaleString(i18n.language)})
                </span>
              </a>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={item.id}>
              <ul className="pl-4">
                <li>
                  <a
                    href="#!"
                    className="d-flex justify-content-between"
                    onClick={(e) =>
                      handleLocationClick(e, item, "location__location__slug")
                    }
                  >
                    <span>
                      <FaArrowRight className="text-forest" />{" "}
                      {t("location_all_of")} {item.name}
                    </span>
                  </a>
                </li>
                {locations[i].sub_locations &&
                  locations[i].sub_locations.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#/"
                        className="d-flex justify-content-between"
                        onClick={(e) =>
                          handleLocationClick(e, item, "location__slug")
                        }
                      >
                        <span>
                          <FaArrowRight className="text-forest" /> {item.name}
                        </span>
                        <span>
                          ({Number(item.ad_count).toLocaleString(i18n.language)}
                          )
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </Accordion.Collapse>
          </div>
        );
      })
    );
  };
  return (
    <div className="sidebar-item-box">
      <div className="gradient-wrapper">
        <div className="gradient-title">
          <h2>{t("locations")}</h2>
        </div>
        <ul className="sidebar-loacation-list">
          <Accordion defaultActiveKey="0">
            <li>
              <a
                href="#!"
                onClick={handleAllLocationClick}
                className="d-flex justify-content-between"
              >
                <span>
                  <FaMapMarkerAlt className="text-forest" />{" "}
                  {t("all_locations")}
                </span>
              </a>
            </li>
            {renderLocation()}
          </Accordion>
        </ul>
      </div>
    </div>
  );
}

LocationSidebar.getInitialProps = async () => ({
  namespacesRequired: ["sidebar"],
});

export default withTranslation("sidebar")(LocationSidebar);
