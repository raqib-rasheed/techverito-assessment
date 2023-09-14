import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filter_context";
import { services } from "../../utils/constants";
import ToysBg from "../../assets/toys-bg.jpg";
import { CSSProperties } from "react";

export const ServicesCards = () => {
  const { updateFilters, handleClickFromServices, clearFilters } =
    useFilterContext();

  const serviceBackgroundStyles: CSSProperties = {
    backgroundImage: `url(${ToysBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const actUponServiceItemAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    clearFilters();
    handleClickFromServices();
    updateFilters(e);
  };

  return (
    <div className="services-center">
      {services.map(({ id, icon, title }) => {
        return (
          <article style={serviceBackgroundStyles} key={id} className="service">
            <h4>{title}</h4>
            <div className="service-body">
              <span className="icon">{icon}</span>
              <Link to="/products">
                <button
                  className="btn"
                  name="home-page-category"
                  value={title}
                  onClick={actUponServiceItemAction}
                >
                  click here for {title}
                </button>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};
