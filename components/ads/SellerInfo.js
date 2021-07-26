import { useDispatch } from "react-redux";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { getAdsAsync } from "../../redux/adSlice";

export default function SellerInfo({ ad, onChat }) {
  const dispatch = useDispatch();

  const params = {
    limit: 20,
    offset: 0,
  };

  const onUserAdClick = () => {
    dispatch(getAdsAsync({ ...params, user__id: ad?.user?.id }));
  };

  return (
    <div className="sidebar-item-box">
      <div className="gradient-wrapper">
        <div className="gradient-title">
          <h3>Seller Information</h3>
        </div>
        <ul className="sidebar-seller-information">
          <li>
            <div className="media">
              <img
                src={
                  ad?.user?.avatar ? ad?.user?.avatar : "/img/user/user1.png"
                }
                style={{ width: "36px", height: "36px" }}
                alt="user"
                className="img-fluid pull-left rounded-circle"
              />
              <div className="media-body">
                <span>Posted By</span>
                <h4>
                  <Link href={`/?user=${ad?.user?.name}`}>
                    <a title="See All Ads" onClick={onUserAdClick}>
                      {ad.user && ad.user.name}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </li>
          <li>
            <div className="media">
              <img
                src="/img/user/user2.png"
                alt="user"
                className="img-fluid pull-left"
              />
              <div className="media-body">
                <span>Location</span>
                <h4>
                  {ad?.location?.name}, {ad?.location?.location_name}
                </h4>
              </div>
            </div>
          </li>
          <li className="d-none d-md-block">
            <div className="media">
              <img
                src="/img/user/user3.png"
                alt="user"
                className="img-fluid pull-left"
              />
              <div className="media-body">
                <span>Contact Number</span>
                <br />
                {ad.hide_phone
                  ? "Phone number hidden"
                  : ad?.ad_phone_numbers?.map((item, i) => (
                      <h4 key={i}>{item.phone}</h4>
                    ))}
              </div>
            </div>
          </li>
          <li className="d-none d-md-block">
            <div className="media">
              <img
                src="/img/user/user4.png"
                alt="user"
                className="img-fluid pull-left"
              />
              <div className="media-body">
                <span>
                  Live Chat{" "}
                  <FaCircle
                    size="10"
                    color={ad?.user?.is_online ? "green" : "gray"}
                  />
                </span>
                <h4>
                  <a href="#!" onClick={onChat}>
                    Chat Now!
                  </a>
                </h4>
              </div>
            </div>
          </li>
          <li>
            <div className="media">
              <img
                src="/img/user/user5.png"
                alt="user"
                className="img-fluid pull-left"
              />
              <div className="media-body">
                <span>Membership</span>
                <h4>{ad?.user?.membership_name} Member</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
