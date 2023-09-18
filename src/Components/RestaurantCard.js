import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info; // optional chaining
    const{deliveryTime}=resData?.info?.sla;
    return(
       <div className="res-card">
          <img className="res-logo" alt="res-img" src={CDN_URL+ resData.info.cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} minutes</h4>
       </div>
    )
 }

 export default RestaurantCard;