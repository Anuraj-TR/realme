import { Link } from "react-router-dom";

import { mobProducts } from "../../Data/data"
import { ProdTile } from "./product-tile";

export const RecommendedPhones = () => {
const specialDeals = mobProducts.filter(prdt => !prdt.specialTime).slice(0,3);
    if(specialDeals.length > 0){
        return(
            <div className="rlm-special-dls">
                <div className="rlm-special-dls__header">
                    <div className="rlm-special-dls__title">
                    Recommend Phones
                    </div>
                    <Link className="rlm-special-dls__link">view more</Link>
                </div>
                <div className="rlm-special-dls__tile-wrap">
                    {
                        specialDeals.map(item =>{
                            return <ProdTile {...item} key={item.id}/>
                        })
                    }
                </div>
            </div>
        )
    }
}