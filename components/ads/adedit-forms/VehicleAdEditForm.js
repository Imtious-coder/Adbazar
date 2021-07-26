/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
import PhoneNumberFields from "../adpost-forms/PhoneNumberFields";

import { withTranslation } from "../../../i18n";

function VehicleAdEditForm({ ad, t }) {
  const { handleSubmit, register, errors, control } = useForm({
    defaultValues: {
      ad_phone_numbers: ad?.ad_phone_numbers || [],
    },
  });
  const [negotiable, setNegotiable] = useState(ad.negotiable || false);
  const [hidePhone, setHidePhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  // const router = useRouter();

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
      negotiable: negotiable,
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
            <Col md={6} className="order-md-2">
              <Form.Group>
                <Form.Label>{t("condition")}:</Form.Label>
                <Form.Control
                  as="select"
                  name="condition"
                  ref={register}
                  disabled={loading}
                  defaultValue={ad?.condition}
                >
                  <option value="used">{t("used")}</option>
                  <option value="new">{t("new")}</option>
                  <option value="recondition">{t("recondition")}</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="order-md-1">
              <Form.Group>
                <Form.Label>
                  {t("price")} <FaAsterisk size="8" className="text-danger" />:
                </Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder={t("price_placeholder")}
                  ref={register({ required: true })}
                  isInvalid={!!errors.price}
                  disabled={loading}
                  defaultValue={ad?.price}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Check
              type="switch"
              id="negotiable"
              name="negotiable"
              label={t("negotiable")}
              onChange={() => setNegotiable(!negotiable)}
              disabled={loading}
              defaultChecked={ad?.negotiable}
            />
          </Form.Group>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t("model_and_year")}:</Form.Label>
                <Form.Control
                  type="text"
                  name="model_and_year"
                  placeholder={t("model_and_year")}
                  ref={register}
                  disabled={loading}
                  defaultValue={ad?.model_and_year}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t("mileage")}:</Form.Label>
                <Form.Control
                  type="text"
                  name="mileage"
                  placeholder={t("mileage_placeholder")}
                  ref={register}
                  disabled={loading}
                  defaultValue={ad?.mileage}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t("warranty")}:</Form.Label>
                <Form.Control
                  type="text"
                  name="warranty"
                  placeholder={t("warranty_placeholder")}
                  ref={register}
                  disabled={loading}
                  defaultValue={ad?.warranty}
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
          {ad && (
            <PhoneNumberFields
              control={control}
              register={register}
              errors={errors}
              loading={loading}
            />
          )}
          <Form.Group>
            <Form.Check
              type="switch"
              id="hide_phone"
              name="hide_phone"
              ref={register}
              checked={ad?.hide_phone || hidePhone}
              label={t("hide_phone")}
              onChange={() => setHidePhone(!hidePhone)}
              disabled={loading}
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

VehicleAdEditForm.getInitialProps = async () => ({
  namespacesRequired: ["ad-form"],
});
export default withTranslation("ad-form")(VehicleAdEditForm);
