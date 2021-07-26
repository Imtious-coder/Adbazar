import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Accordion } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { getCategoriesAsync, setCategory } from "../../redux/sidebarSlice";
import { setActiveCategorySearchModal } from "../../redux/modalSlice";
import { getAdsAsync } from "../../redux/adSlice";
import { withTranslation, i18n } from "../../i18n";

function CategorySidebar({ t }) {
  const { allCategory: categories } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const router = useRouter();

  const params = { limit: 20, offset: 0 };

  const handleCategoryClick = (e, item, key) => {
    e.preventDefault();

    // Hide Modal for searchbar
    dispatch(setActiveCategorySearchModal(false));

    // Set Selected Category
    dispatch(setCategory(item));

    delete router.query["user"];
    delete router.query["category__slug"];
    delete router.query["category__category__slug"];

    dispatch(getAdsAsync({ ...params, ...router.query, [key]: item.slug }));

    router
      .push({ pathname: "/", query: { ...router.query, [key]: item.slug } })
      .then(() => window.scrollTo(0, 0));
  };

  const handleAllCategoryClick = (e) => {
    e.preventDefault();
    dispatch(setActiveCategorySearchModal(false));
    dispatch(setCategory({}));

    delete router.query["user"];
    delete router.query["category__slug"];
    delete router.query["category__category__slug"];

    dispatch(getAdsAsync({ ...params, ...router.query }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);

  const renderCategory = () => {
    return (
      categories &&
      categories.map((item, i) => (
        <div key={i}>
          <Accordion.Toggle as="li" eventKey={item.id}>
            <a href="#/">
              <img src={item.icon} alt="category" className="img-fluid" />
              {item.name}
              <span>
                ({Number(item.ad_count).toLocaleString(i18n.language)})
              </span>
            </a>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={item.id}>
            <ul className="bg-accent">
              <li className="pl-3 border-0">
                <a
                  href="#/"
                  className="d-flex justify-content-between"
                  onClick={(e) =>
                    handleCategoryClick(e, item, "category__category__slug")
                  }
                >
                  <div>
                    <FaArrowRight className="text-forest" /> {t("all_of")}{" "}
                    {item.name}
                  </div>
                </a>
              </li>
              {categories[i].sub_categories &&
                categories[i].sub_categories.map((item, i) => (
                  <li className="pl-3 border-0" key={i}>
                    <a
                      href="#/"
                      className="d-flex justify-content-between"
                      onClick={(e) =>
                        handleCategoryClick(e, item, "category__slug")
                      }
                    >
                      <div>
                        <FaArrowRight className="text-forest" /> {item.name}
                      </div>
                      <span>
                        {" "}
                        ({Number(item.ad_count).toLocaleString(i18n.language)})
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </Accordion.Collapse>
        </div>
      ))
    );
  };
  return (
    <div className="sidebar-item-box">
      <div className="gradient-wrapper">
        <div className="gradient-title">
          <h2>{t("categories")}</h2>
        </div>
        <ul className="sidebar-category-list">
          <Accordion defaultActiveKey="0">
            <li>
              <a href="#!" onClick={handleAllCategoryClick}>
                <img src="/img/all-cat.png" alt="Cat" className="img-fluid" />
                {t("all_categories")}
              </a>
            </li>
            {renderCategory()}
          </Accordion>
        </ul>
      </div>
    </div>
  );
}

CategorySidebar.getInitialProps = async () => ({
  namespacesRequired: ["sidebar"],
});

export default withTranslation("sidebar")(CategorySidebar);
