import { Link } from "react-router-dom"
import {BiRupee} from "react-icons/bi"

import { useCountdown } from "../hooks/countdown"

// Checking wether the product has offer
const ProductPrice = ({currentPrice,offer}) => {
    if(offer) {
        const offerPrice = currentPrice -((currentPrice / 100) * offer)
        return(
            <>
            <div className="rlm-prod-tile__price">
               <BiRupee />{offerPrice}
            </div>
            <div className="rlm-prod-tile__price rlm-prod-tile__price--offer">
            <BiRupee />{currentPrice}
            </div>
            </>
        )
    }
    return(
        <div className="rlm-prod-tile__price">
           <BiRupee />{currentPrice}
        </div>
    )
}


export const ProdTile = ({img,name,price,offer,specialTime}) => {

    const {days,hours,minutes,seconds} = useCountdown(specialTime)

    return(
        <Link className="rlm-prod-tile">
            <div className="rlm-prod-tile__img">
                <img src={img} alt={name} />
            </div>
            <div className="rlm-prod-tile__cnt">
                <div className="rlm-prod-tile__title">
                    {name}
                </div>
                <div className="rlm-prod-tile__price_block">
                    <ProductPrice currentPrice={price}  offer={offer}/>
                </div>
                {
                    specialTime &&
                        <div className="rlm-prod-tile__count-down">
                            {
                                days && 
                                <>
                                    <div className="rlm-prod-tile__offer-time">
                                        {
                                            days + "D"
                                        }    
                                    </div>
                                    <div>
                                        |
                                    </div>
                                </>
                            }
                            <div className="rlm-prod-tile__offer-time">
                            {
                                hours
                            }    
                            </div> 
                            <div>:</div>
                            <div className="rlm-prod-tile__offer-time">
                                {
                                    minutes
                                }
                            </div> 
                            <div>:</div>
                            <div className="rlm-prod-tile__offer-time rlm-prod-tile__offer-time--sec">
                                {
                                    seconds
                                }
                            </div>
                        </div>
                }   
            </div>
        </Link>
    )
}