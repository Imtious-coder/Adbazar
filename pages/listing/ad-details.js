/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AdDetails from "../../components/ads/AdDetails";
import Layout from "../../components/Layout/Layout";
import { getAdByIdAsync } from "../../redux/adSlice";

export default function AdsDetailPage() {
  const router = useRouter();
  const { adId } = router.query;
  const { adById, adByIdRequestStatus } = useSelector((state) => state.ads);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdByIdAsync(adId));
  }, [adId]);

  return (
    <Layout>{<AdDetails ad={adById} status={adByIdRequestStatus} />}</Layout>
  );
}
