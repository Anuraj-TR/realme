import { Link } from "react-router-dom";

export const CatagoryTile = ({img,title}) => {
    return (
      <Link className="rlm-catagory-tile">
        <div className="rlm-catagory-tile_img">
          <img src={img} alt={title} />
        </div>
        <div className="rlm-catagory-tile_cnt">
                {title}
        </div>
      </Link>
    );
}