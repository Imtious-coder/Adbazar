import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { getLocationsAsync, setLocation } from "../../../redux/sidebarSlice";
import { setActiveLocationModal } from "../../../redux/modalSlice";

export default function LocationSelect() {
  const { allLocation: locations } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  const handleLocationClick = (e, item) => {
    e.preventDefault();

    // Hide Modal for searchbar
    dispatch(setActiveLocationModal(false));

    // Set Selected Location
    dispatch(setLocation(item));
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
                <span> ({item.ad_count})</span>
              </a>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={item.id}>
              <ul className="pl-4">
                {locations[i].sub_locations &&
                  locations[i].sub_locations.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#/"
                        className="d-flex justify-content-between"
                        onClick={(e) => handleLocationClick(e, item)}
                      >
                        <span>
                          <FaArrowRight className="text-forest" /> {item.name}
                        </span>
                        <span> ({item.ad_count})</span>
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
          <h3>Location</h3>
        </div>
        <ul className="sidebar-loacation-list">
          <Accordion defaultActiveKey="0">{renderLocation()}</Accordion>
        </ul>
      </div>
    </div>
  );
}
