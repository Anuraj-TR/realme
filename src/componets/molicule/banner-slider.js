import { Link } from "react-router-dom";

export const BannerSlider = ({mob,desk,large}) => {
  return (
    <Link to={"/"} className="rlm-banner__slider">
      <picture className="rlm-banner__slider_img">
        <source
          media="(max-width:767px)"
          srcSet={mob}
        />
        <source
          media="(min-width:768px) and (max-width:1920px)"
          srcSet={desk}
        />
        <img src={large} alt="Banner image" />
      </picture>
    </Link>
  );
};
