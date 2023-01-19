import { mobProducts } from "../../Data/data"
import { SubHeading } from "../attom/heading"
import { ProdTile } from "../molicule/product-tile"

export const HottestPhones = () => {
    const products = mobProducts.filter(item=> !item.specialTime!="").slice(0,10)
    return(
        <div className="rlm-hot-phns">
            <div className="content-wrapper">
                <SubHeading>Hottest Phones</SubHeading>
                <div className="rlm-hot-phns-tile_wrap">
                    {
                        products.map((item) =>{
                            return <ProdTile {...item} key={item.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}