import { SubHeading } from "../attom/heading";
import { ProductPlate } from "../molicule/product-plate";

import mainTileBg from "../../assets/images/new-arrival-img1.webp"
import { newArrivals } from "../../Data/data";

export const NewArrivals = () => {
    
    const largeTyle = newArrivals.find((item) => item.type === "large")
    const tyles = newArrivals.filter((item) => item.type !== "large")
    return(
        <div className="content-wrapper">
            <div className="rlm-new-arvls">
                <SubHeading>new arrivals</SubHeading>
                <div className="rlm-new-arvls-tile_wrap">
                    <div className="rlm-new-arvls_cnt">
                        <ProductPlate 
                        bg={largeTyle.bgImg}
                        title={largeTyle.title}
                        desc={largeTyle.desc}
                        price={largeTyle.price}
                        type={largeTyle.type} />
                    </div>
                    <div className="rlm-new-arvls_cnt">
                        {
                            tyles.map(item=>{
                                return  <ProductPlate 
                                bg={item.bgImg}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                type={item.type}
                                key={item.id} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}