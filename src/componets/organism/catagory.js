import { catagoryData } from "../../Data/data";

import { CatagoryTile } from "../molicule/catagory-tile";

export const Catagory = () => {
    return (
      <div className="rlm-catagory">
            <div className="content-wrapper">
                <div className="rlm-catagory-tile__wrapper">
                    {
                        catagoryData.map((catagory, index) => {
                            return (
                                <CatagoryTile img={catagory.img} title={catagory.title} key={index} />
                            )
                        })
                    }
                </div>
        </div>
      </div>
    );
}