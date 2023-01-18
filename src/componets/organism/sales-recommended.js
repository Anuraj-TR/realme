import { RecommendedPhones } from "../molicule/recommended-phones"
import {SuperPricingDeals} from "../molicule/super-pricing-deals"

export const SalesRecommended = () => {
    return(
        <div className="content-wrapper">
            <div className="rlm-sales-recommended">
                <SuperPricingDeals />
                <RecommendedPhones />
            </div>
        </div>
    )
}