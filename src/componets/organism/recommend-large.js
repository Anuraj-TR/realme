import { SubHeading } from "../attom/heading"
import { ProductPlate } from "../molicule/product-plate"
import { recommendePhones } from "../../Data/data"

export const RecommendPhonesLarge = () => {
    return(
        <div className="rlm-recmnd-lg">
            <div className="content-wrapper">
                <SubHeading>Recommend Phones</SubHeading>
                <div className="rlm-recmnd-lg-tile_wrap">
                    {
                        recommendePhones.map((item) => {
                            return(
                                <div className="rlm-recmnd-lg__cnt">
                                <ProductPlate 
                                    {...item}
                                />   
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}