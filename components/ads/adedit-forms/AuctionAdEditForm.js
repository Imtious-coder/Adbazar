/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Col, Spinner } from "react-bootstrap";
import { FaEdit, FaAsterisk } from "react-icons/fa";
import ImageUploader from "../ImageUploader";
import adsAPI from "../../../services/adsAPI";
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from "../../../redux/modalSlice";
import { getAdByIdAsync } from "../../../redux/adSlice";

import { withTranslation } from "../../../i18n";

function AuctionAdEditForm({ ad, t }) {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const { selectedCategory, selectedLocation } = useSelector(
    (state) => state.sidebar
  );

  const onSubmit = async (formData) => {
    // Get Selected location and sublocation
    if (!selectedLocation.id || !selectedCategory.id) {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: t("select_category_location"),
        })
      );
      window.scrollTo(0, 0);
      return;
    }
    // Check Atleast One Image
    if (!images.length > 0) {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: t("select_one_image"),
        })
      );
      return;
    }

    const formattedData = {
      ...formData,
      location: selectedLocation.id,
      category: selectedCategory.id,
      images: images,
      ad_type: selectedCategory.ad_type,
    };

    setLoading(true);

    const res = await adsAPI.updateAdById(ad.id, formattedData);

    setLoading(false);

    if (/20[0-6]/g.test(res.status)) {
      // router.push("/dashboard");
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: t("success_message"),
        })
      );

      // Refetch ad
      dispatch(getAdByIdAsync(ad.id));
    } else {
      console.log("Error Updating ad");
    }
  };

  useEffect(() => {
    setImages(ad?.ad_images);
  }, [ad]);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-50">
          <Form.Group>
            <Form.Label>
              {t("ad_title")} <FaAsterisk size="8" className="text-danger" />:
            </Form.Label>
            <Form.Control
              type="text"
              name="ad_title"
              placeholder={t("ad_title_placeholder")}
              ref={register({ required: true })}
              isInvalid={!!errors.ad_title}
              disabled={loading}
              defaultValue={ad?.ad_title}
            />
          </Form.Group>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t("features")}:</Form.Label>
                <Form.Control
                  type="text"
                  name="features"
                  placeholder={t("features")}
                  ref={register}
                  disabled={loading}
                  defaultValue={ad?.features}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t("other_information")}:</Form.Label>
                <Form.Control
                  type="text"
                  name="other_information"
                  placeholder={t("other_information")}
                  ref={register}
                  disabled={loading}
                  defaultValue={ad?.other_information}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group>
            <Form.Label>
              {t("description")} <FaAsterisk size="8" className="text-danger" />
              :
            </Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder={t("description_placeholder")}
              rows="5"
              ref={register({ required: true })}
              isInvalid={!!errors.description}
              disabled={loading}
              defaultValue={ad?.description}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>{t("ad_images")}:</Form.Label>
            <ImageUploader images={images} setImages={setImages} />
          </Form.Group>
        </div>

        <Button
          type="submit"
          className="btn btn-block bg-primary-btn"
          disabled={loading}
        >
          <FaEdit /> {t("submit_ad")}{" "}
          {loading && <Spinner animation="border" size="sm" />}
        </Button>
      </Form>
    </div>
  );
}
AuctionAdEditForm.getInitialProps = async () => ({
  namespacesRequired: ["ad-form"],
});
export default withTranslation("ad-form")(AuctionAdEditForm);
