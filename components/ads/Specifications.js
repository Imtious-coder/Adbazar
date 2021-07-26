import { humanize } from "humanize";

export default function Specifications({ ad }) {
  const JOB_TYPE_CHOICES = {
    full_time: "Full Time",
    part_time: "Part Time",
    contract: "Contract",
    internship: "Internship",
  };

  const MIN_REQUIREMENT_CHOICES = {
    primary_school: "Primary School",
    high_school: "High School",
    ssc: "SSC / O Level",
    hsc: "HSC / A Level",
    diploma: "Diploma",
    graduate: "Bachelors / Honours",
    post_graduate: "Masters",
    doctorate: "PHD / Doctorate",
  };

  const renderSpecs = () => {
    // To buy ad fields
    if (ad.is_sell === false) {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>

          {ad.features && (
            <li>
              <b>Features: </b>
              <span>{ad.features}</span>
            </li>
          )}
          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
    // Electroncis ad fields
    else if (ad.ad_type === "electronics") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>

          {ad.condition && (
            <li>
              <b>Condition: </b>
              <span>{ad.condition}</span>
            </li>
          )}
          {ad.warranty && (
            <li>
              <b>Warranty: </b>
              <span>{ad.warranty}</span>
            </li>
          )}
          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
    // General Ad fields
    else if (ad.ad_type === "general") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>

          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
    // General Ad fields
    else if (ad.ad_type === "general_condition") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>
          {ad.condition && (
            <li>
              <b>Condition: </b>
              <span>{ad.condition}</span>
            </li>
          )}

          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
    // Job Ad fields
    else if (ad.ad_type === "job") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>
          {ad.salary !== 0 && (
            <li>
              <b>Salary: </b>
              <span>{ad.salary}</span>
            </li>
          )}
          {ad.job_type && (
            <li>
              <b>Job Type: </b>
              <span>{JOB_TYPE_CHOICES[ad.job_type]}</span>
            </li>
          )}
          {ad.total_vacancies !== 0 && (
            <li>
              <b>Total Vacancies: </b>
              <span>{ad.total_vacancies}</span>
            </li>
          )}
          {ad.application_deadline && (
            <li>
              <b>Application Deadline: </b>
              <span>{ad.application_deadline}</span>
            </li>
          )}
          {ad.minimum_requirement && (
            <li>
              <b>Minimum Requirement: </b>
              <span>{MIN_REQUIREMENT_CHOICES[ad.minimum_requirement]}</span>
            </li>
          )}
          {ad.address && (
            <li>
              <b>Address: </b>
              <span>{ad.address}</span>
            </li>
          )}
          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
          {ad.company_website && (
            <li>
              <b>Company Website: </b>
              <span>
                <a href={ad.company_website}>{ad.company_website}</a>
              </span>
            </li>
          )}
          {ad.attached_file && (
            <li>
              <b>Attachment: </b>
              <span>
                <a href={ad.attached_file} target="_blank">
                  Download
                </a>
              </span>
            </li>
          )}
        </>
      );
    }
    // Property Ad fields
    else if (ad.ad_type === "property") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>

          {ad.address && (
            <li>
              <b>Address: </b>
              <span>{ad.address}</span>
            </li>
          )}
          {ad.plot_size && (
            <li>
              <b>Land / Plot Size: </b>
              <span>{ad.plot_size}</span>
            </li>
          )}

          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
    // Service Ad fields
    else if (ad.ad_type === "service") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>

          {ad.address && (
            <li>
              <b>Address: </b>
              <span>{ad.address}</span>
            </li>
          )}
          {ad.service_type && (
            <li>
              <b>Service Type: </b>
              <span>{ad.service_type}</span>
            </li>
          )}
          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
    // Vehicle Ad fields
    else if (ad.ad_type === "vehicle") {
      return (
        <>
          <li>
            <b>Category: </b>
            <span>
              {ad.category.name}, {ad.category.category_name}
            </span>
          </li>

          {ad.condition && (
            <li>
              <b>Condition: </b>
              <span>{ad.condition}</span>
            </li>
          )}
          {ad.model_and_year && (
            <li>
              <b>Model & Year: </b>
              <span>{ad.model_and_year}</span>
            </li>
          )}
          {ad.mileage && (
            <li>
              <b>Mileage: </b>
              <span>{ad.mileage}</span>
            </li>
          )}
          {ad.warranty && (
            <li>
              <b>Warranty: </b>
              <span>{ad.warranty}</span>
            </li>
          )}
          {ad.other_information && (
            <li>
              <b>Other Information: </b>
              <span>{ad.other_information}</span>
            </li>
          )}
        </>
      );
    }
  };

  return <>{renderSpecs()}</>;
}
