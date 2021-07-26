/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Spinner } from "react-bootstrap";
import { FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { humanize } from "humanize";
import { getFavouriteAdsAsync } from "../../redux/adSlice";
import DeleteModal from "../CommonModals/DeleteModal";
import {
  setActiveDeleteModal,
  setActiveErrorModal,
  setDeleteModalLoading,
  setActiveSuccessModal,
} from "../../redux/modalSlice";
import adsAPI from "../../services/adsAPI";

export default function FavouriteAdsTable() {
  const [idToDelete, setIdToDelete] = useState("");

  const { favouriteAds, favouriteAdsRequestStatus } = useSelector(
    (state) => state.ads
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouriteAdsAsync());
  }, []);

  const handleDelete = async () => {
    dispatch(setDeleteModalLoading(true));

    const res = await adsAPI.deleteFavouriteAd(idToDelete);

    dispatch(setDeleteModalLoading(false));
    dispatch(setActiveDeleteModal(false));

    if (/20[0-6]/g.test(res.status)) {
      dispatch(getFavouriteAdsAsync());
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

  return (
    <div className="gradient-wrapper item-mb border-none">
      <div className="gradient-title">
        <div className="row no-gutters">
          <h2 className="mb10--mb">Favourite Ads</h2>
        </div>
      </div>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {favouriteAdsRequestStatus === "fulfilled" &&
            favouriteAds.map((ad, i) => (
              <tr key={`ad-${i}`}>
                <td>{i}</td>
                <td>
                  <img
                    src={
                      ad?.ad_detail?.ad_images?.length > 0
                        ? ad?.ad_detail?.ad_images[0]?.image
                        : ""
                    }
                    alt={ad?.ad_detail?.ad_title}
                    width="40"
                    className="mr-2"
                  />
                  {ad.ad_detail && (
                    <Link href={`/listing/ad-details/?adId=${ad.id}`}>
                      <a>{humanize.truncatechars(ad.ad_detail.ad_title, 30)}</a>
                    </Link>
                  )}
                </td>
                <td>{ad?.ad_detail?.price}</td>
                <td>
                  {ad.ad ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <FaTimesCircle color="red" />
                  )}
                </td>

                <td>
                  <a
                    href="#!"
                    className="text-danger ml-2"
                    onClick={() => {
                      setIdToDelete(ad.id);
                      dispatch(setActiveDeleteModal(true));
                    }}
                  >
                    <FaTrash />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {favouriteAdsRequestStatus === "pending" && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      <DeleteModal confirmHandler={handleDelete} />
    </div>
  );
}
