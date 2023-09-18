import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
   //local state variable - super powerful variable
   const [listOfRestaurants,setlistOfRestaurants] = useState(resList);

   /* This can also be written as: -> Array destructring
   const arr = useState(resList);
   const [listOfRestaurants,setlistOfRestaurants] = arr;  */

/*    line 11 means i.e 
   const listOfRestaurants = arr[0];
   const setlistOfRestaurants = arr[1]; */ 
   
   // Normal JS variable
 /* let listOfRestaurants = [{
   "info": {
      "id": "24342",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "sla": {
        "deliveryTime": 25,
      }
   }    
},
{
   "info": {
      "id": "24343",
      "name": "KFC",
      "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 3.8,
      "sla": {
        "deliveryTime": 25,
      }
   },
   
   "info": {
      "id": "24344",
      "name": "A2B",
      "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.7,
      "sla": {
        "deliveryTime": 25,
      }
   }    
}]; */
    return(
       <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={() => {
               filteredList=listOfRestaurants.filter((res)=>res.info.avgRating > 4);
               setlistOfRestaurants(filteredList);
               }}
               >Top Rated Restaurants</button>
            </div>
          <div className="res-container">
             {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};
          </div>
       </div>
    )
 }


 export default Body;