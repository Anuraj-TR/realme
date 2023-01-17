import { Link } from "react-router-dom"

im


export const ProdTile = ({img,name,price,offer,specialTime}) => {


    const currentPrice = price
    const offerPrice = currentPrice -((currentPrice / 100) * offer)
    return(
        <Link className="rlm-prod-tile">
            <div className="rlm-prod-tile__img">
                <img src={img} alt={name} />
            </div>
            <div className="rlm-prod-tile__cnt">
                <div className="rlm-prod-tile__title">
                    {/* {name} */}
                </div>
                <div className="rlm-prod-tile__price_block">
                    <div className="rlm-prod-tile__price">
                        {/* {offerPrice} */}
                    </div>
                    <div className="rlm-prod-tile__price rlm-prod-tile__price--offer">
                        {/* {currentPrice} */}
                    </div>
                </div>
                <div className="rlm-prod-tile__count-down">
                    <div className="rlm-prod-tile__offer-time">
                        {/* {
                            timerDate + "D"
                        }     */}
                    </div>
                    <div>
                        |
                    </div>
                    <div className="rlm-prod-tile__offer-time">
                    {/* {
                        timerHours
                    }     */}
                    </div> 
                    <div>:</div>
                    <div className="rlm-prod-tile__offer-time">
                        {/* {
                            timerMinuts
                        } */}
                    </div> 
                    <div className="rlm-prod-tile__offer-time">
                        {/* {
                            timerseconds
                        } */}
                    </div>
                </div>
            </div>
        </Link>
    )
}