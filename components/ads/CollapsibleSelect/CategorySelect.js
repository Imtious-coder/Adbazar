import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Accordion } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { setCategory } from "../../../redux/sidebarSlice";
import { setActiveCategoryModal } from "../../../redux/modalSlice";

export default function CategorySelect() {
  const { allCategory: categories } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleCategoryClick = (e, item) => {
    e.preventDefault();

    // Hide Modal for searchbar
    dispatch(setActiveCategoryModal(false));

    // Set Selected Category
    dispatch(setCategory(item));

    const { ad_type, adId } = router.query;

    if (ad_type !== undefined && adId !== undefined) {
      router.push(
        `${router.pathname}?type=${item.ad_type}&ad_type=${ad_type}&adId={adId}`
      );
    } else if (ad_type !== undefined && adId === undefined) {
      router.push(`${router.pathname}?type=${item.ad_type}&ad_type=${ad_type}`);
    } else if (ad_type === undefined && adId !== undefined) {
      router.push(`${router.pathname}?type=${item.ad_type}&adId=${adId}`);
    } else {
      router.push(`${router.pathname}?type=${item.ad_type}`);
    }
  };

  const renderCategory = () => {
    return (
      categories &&
      categories.map((item, i) => (
        <div key={i}>
          <Accordion.Toggle as="li" eventKey={item.id}>
            <a href="#/">
              <img src={item.icon} alt="category" className="img-fluid" />
              {item.name}
              <span>({item.ad_count})</span>
            </a>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={item.id}>
            <ul className="bg-accent">
              {categories[i].sub_categories &&
                categories[i].sub_categories.map((item, i) => (
                  <li className="pl-3 border-0" key={i}>
                    <a
                      href="#/"
                      className="d-flex justify-content-between"
                      onClick={(e) => handleCategoryClick(e, item)}
                    >
                      <div>
                        <FaArrowRight className="text-forest" /> {item.name}
                      </div>
                      <span> ({item.ad_count})</span>
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
          <h3>All Categories</h3>
        </div>
        <ul className="sidebar-category-list">
          <Accordion defaultActiveKey="0">{renderCategory()}</Accordion>
        </ul>
      </div>
    </div>
  );
}
