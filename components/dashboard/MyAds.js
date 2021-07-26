/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, OverlayTrigger, Tooltip, Spinner } from "react-bootstrap";
import moment from "moment";
import {
  FaBolt,
  FaCalendarAlt,
  FaCheck,
  FaEdit,
  FaRedo,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { humanize } from "humanize";
import { getMyAdsAsync } from "../../redux/adSlice";
import DeleteModal from "../CommonModals/DeleteModal";
import {
  setActiveDeleteModal,
  setActiveErrorModal,
  setDeleteModalLoading,
  setActiveSuccessModal,
} from "../../redux/modalSlice";
import adsAPI from "../../services/adsAPI";
import TopAdModal from "./top-ad/TopAdModal";
import { getAllTopAdPackagesAsync } from "../../redux/dashboardSlice";

export default function Myads() {
  const [idToDelete, setIdToDelete] = useState("");
  const [selectedAd, setSelectedAd] = useState({});
  const [showTopAdModal, setShowTopAdModal] = useState(false);
  const { myAds, myadRequestStatus } = useSelector((state) => state.ads);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAdsAsync());
    dispatch(getAllTopAdPackagesAsync());
  }, []);

  const handleDelete = async () => {
    dispatch(setDeleteModalLoading(true));

    const res = await adsAPI.deleteAd(idToDelete);

    dispatch(setDeleteModalLoading(false));
    dispatch(setActiveDeleteModal(false));

    if (/20[0-6]/g.test(res.status)) {
      dispatch(getMyAdsAsync());
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: "Ad deleted Successfully",
        })
      );
    } else {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: "Error Deleting Ad",
        })
      );
    }
  };

  const onUpgrade = (e, item) => {
    e.preventDefault();
    setSelectedAd(item);
    setShowTopAdModal(true);
  };

  return (
    <div className="gradient-wrapper item-mb border-none" css={table_css}>
      <div className="gradient-title">
        <div className="row no-gutters">
          <h2 className="mb10--mb">My Ads</h2>
        </div>
      </div>

      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Price</th>
            <th>Status</th>
            <th>Expires</th>
            <th>Top Ad</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {myAds &&
            myAds.map((ad, i) => (
              <tr key={`ad-${i}`} className={ad.is_bid ? "auction-bg" : ""}>
                <td>{i}</td>
                <td>
                  <img
                    src={ad.thumbnail}
                    alt="thumb"
                    width="40"
                    className="mr-2"
                  />
                  <Link href={`/listing/ad-details/?adId=${ad.id}`}>
                    <a>{humanize.truncatechars(ad.ad_title, 30)}</a>
                  </Link>
                </td>
                <td>{ad.is_bid ? `${ad?.bid_count} bids` : ad?.price}</td>
                <td>{ad?.publish_status}</td>
                <td>{moment(ad?.expiry_date).format("DD-MM-YYYY")}</td>
                <td>
                  {ad?.top_ad ? (
                    <>
                      <FaCheck className="text-success mr-2" />

                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={`tooltip-${ad.id}`}>
                            Expire at:
                            <br />
                            {moment(ad?.top_ad_expiry_date).format(
                              "DD-MM-YYYY"
                            )}
                          </Tooltip>
                        }
                      >
                        <FaCalendarAlt className="text-primary" />
                      </OverlayTrigger>
                    </>
                  ) : (
                    <FaTimes className="text-danger" />
                  )}
                </td>

                <td>
                  {ad.is_sell === false ? (
                    <Link
                      href={`/listing/edit-ad?type=${ad.category.ad_type}&adId=${ad.id}&ad_type=to_buy`}
                    >
                      <a className="text-primary ml-2" title="Edit">
                        <FaEdit />
                      </a>
                    </Link>
                  ) : ad.is_bid === true ? (
                    <Link
                      href={`/listing/edit-ad?type=${ad.category.ad_type}&adId=${ad.id}&ad_type=auction`}
                    >
                      <a className="text-primary ml-2" title="Edit">
                        <FaEdit />
                      </a>
                    </Link>
                  ) : (
                    <Link
                      href={`/listing/edit-ad?type=${ad.category.ad_type}&adId=${ad.id}`}
                    >
                      <a className="text-primary ml-2" title="Edit">
                        <FaEdit />
                      </a>
                    </Link>
                  )}
                  <a
                    href="#!"
                    className="text-info ml-2"
                    onClick={(e) => onUpgrade(e, ad)}
                  >
                    {ad?.top_ad ? (
                      <FaRedo title="Renew" />
                    ) : (
                      <FaBolt title="Top Ad" />
                    )}
                  </a>
                  <a
                    href="#!"
                    className="text-danger ml-2"
                    onClick={() => {
                      setIdToDelete(ad.id);
                      dispatch(setActiveDeleteModal(true));
                    }}
                    title="Delete"
                  >
                    <FaTrash />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {myadRequestStatus === "pending" && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      <DeleteModal confirmHandler={handleDelete} />
      <TopAdModal
        show={showTopAdModal}
        setShow={setShowTopAdModal}
        ad={selectedAd}
      />
    </div>
  );
}

const table_css = css`
   {
    .auction-bg {
      background: rgba(47, 131, 89, 0.3) !important;
    }
  }
`;
