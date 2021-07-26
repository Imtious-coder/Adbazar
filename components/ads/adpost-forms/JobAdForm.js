/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import { FaPlusCircle, FaAsterisk } from 'react-icons/fa';
import ImageUploader from '../ImageUploader';
import adsAPI from '../../../services/adsAPI';
import {
  setActiveErrorModal,
  setActiveSuccessModal,
} from '../../../redux/modalSlice';

import { withTranslation } from '../../../i18n';

function JobAdForm({ t }) {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, errors, reset } = useForm();

  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const { selectedCategory, selectedLocation } = useSelector(
    (state) => state.sidebar
  );

  const onSubmit = async (formData) => {
    // Get Selected location and sublocation
    if (!selectedLocation.id || !selectedCategory.id) {
      dispatch(
        setActiveErrorModal({
          active: true,
          message: t('select_category_location'),
        })
      );
      window.scrollTo(0, 0);
      return;
    }

    const fileForm = new FormData();
    fileForm.append('attached_file', formData.attached_file[0]);
    fileForm.append('location', selectedLocation.id);
    fileForm.append('category', selectedCategory.id);

    delete formData.attached_file;

    const formattedData = {
      ...formData,
      location: selectedLocation.id,
      category: selectedCategory.id,
      images: images,
      ad_type: selectedCategory.ad_type,
      is_job: true,
    };

    setLoading(true);

    const res = await adsAPI.createAd(formattedData);

    setLoading(false);

    if (/20[0-6]/g.test(res.status)) {
      reset();

      await adsAPI.updateAdById(res.data.id, fileForm);
      router.push('/dashboard/my-ads');
      dispatch(
        setActiveSuccessModal({
          active: true,
          message: t('success_message'),
        })
      );
    } else {
      console.log('Error creating ad');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-50">
          <Form.Group>
            <Form.Label>
              {t('ad_title')} <FaAsterisk size="8" className="text-danger" />:
            </Form.Label>
            <Form.Control
              type="text"
              name="ad_title"
              placeholder={t('ad_title_placeholder')}
              ref={register({ required: true })}
              isInvalid={!!errors.ad_title}
              disabled={loading}
            />
          </Form.Group>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  {t('job_type')}{' '}
                  <FaAsterisk size="8" className="text-danger" />:
                </Form.Label>
                <Form.Control
                  as="select"
                  name="job_type"
                  ref={register}
                  disabled={loading}
                >
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t('total_vacancies')}:</Form.Label>
                <Form.Control
                  type="number"
                  name="total_vacancies"
                  placeholder={t('total_vacancies')}
                  ref={register}
                  defaultValue={0}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  {t('minimum_requirement')}{' '}
                  <FaAsterisk size="8" className="text-danger" />:
                </Form.Label>
                <Form.Control
                  as="select"
                  name="minimum_requirement"
                  ref={register}
                  disabled={loading}
                >
                  <option value="primary_school">Primary School</option>
                  <option value="high_school">High School</option>
                  <option value="ssc">SSC / O Level</option>
                  <option value="hsc">HSC / A Level</option>
                  <option value="diploma">Diploma</option>
                  <option value="graduate">Bachelors / Honours</option>
                  <option value="post_graduate">Masters</option>
                  <option value="doctorate">PHD / Doctorate</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  {t('application_deadline')}{' '}
                  <FaAsterisk size="8" className="text-danger" />:
                </Form.Label>
                <Form.Control
                  type="date"
                  name="application_deadline"
                  ref={register({ required: true })}
                  disabled={loading}
                  isInvalid={!!errors.application_deadline}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>{t('about_company')}:</Form.Label>
            <Form.Control
              type="text"
              name="about_company"
              placeholder={t('about_company')}
              ref={register}
              disabled={loading}
            />
          </Form.Group>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t('address')}:</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder={t('address')}
                  ref={register}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>{t('other_information')}:</Form.Label>
                <Form.Control
                  type="text"
                  name="other_information"
                  placeholder={t('other_information')}
                  ref={register}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>{t('company_website')}:</Form.Label>
            <Form.Control
              type="text"
              name="company_website"
              placeholder={t('company_website_placeholder')}
              ref={register}
              isInvalid={!!errors.price}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              {t('description')} <FaAsterisk size="8" className="text-danger" />
              :
            </Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder={t('description_placeholder')}
              rows="5"
              ref={register({ required: true })}
              isInvalid={!!errors.description}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>{t('attachment')}:</Form.Label>
            <Form.Control
              as="input"
              type="file"
              name="attached_file"
              ref={register}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>{t('ad_images')}:</Form.Label>
            <ImageUploader images={images} setImages={setImages} />
          </Form.Group>
        </div>

        <Button
          type="submit"
          className="btn btn-block bg-primary-btn"
          disabled={loading}
        >
          <FaPlusCircle /> {t('submit_ad')}{' '}
          {loading && <Spinner animation="border" size="sm" />}
        </Button>
      </Form>
    </div>
  );
}

JobAdForm.getInitialProps = async () => ({
  namespacesRequired: ['ad-form'],
});
export default withTranslation('ad-form')(JobAdForm);
