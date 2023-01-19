import { Link } from "react-router-dom"
import {BiRupee} from "react-icons/bi"

export const ProductPlate = (tile) => {
    const {img,title,desc,price,bg,type} = tile
    return(
        <Link className={`rlm-prod-plate ${type === "large" ? 'rlm-prod-plate--large' : type === "black" ? "rlm-prod-plate--black" : ""}`} style={bg && {backgroundImage: `url(${bg})`}}>
            <div className="rlm-prod-plate__left">
                <div className="rlm-prod-plate__cnt">
                    <div className="rlm-prod-plate__title">
                        {title}
                    </div>
                    {
                        desc &&
                        <div className="rlm-prod-plate__text">
                            {desc}
                        </div>
                    }
                </div>
                <div className="rlm-prod-plate__price">
                    <span className="rlm-prod-plate__price--text"> from </span><BiRupee />{price}
                </div>
            </div>
            <div className="rlm-prod-plate__img">
                {
                    img &&
                    <img src={img} alt="" />
                }
            </div>
        </Link>
    )
}