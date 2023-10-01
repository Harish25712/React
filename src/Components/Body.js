import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
   //local state variable - super powerful variable
   const [listOfRestaurants,setlistOfRestaurants] = useState([]);
   const[searchText,setSearchText] = useState("");
   const[filteredRestaurant,setFilteredRestaurant] = useState([]);

   /* This can also be written as: -> Array destructring
   const arr = useState(resList);
   const [listOfRestaurants,setlistOfRestaurants] = arr;  */

/*    line 11 means i.e 
   const listOfRestaurants = arr[0];
   const setlistOfRestaurants = arr[1]; */ 
   
   useEffect(()=>{
      fetchData();
   },[]);
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
const fetchData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9418448&lng=80.2415312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
    /* fetch will return a promise
    resolve it using async await */
   const json = await data.json();
   console.log(json);
   setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // optional chaining
   setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

// Conditional Rendering
/* if(listOfRestaurants.length === 0)
{
   return <Shimmer/>;
} */

return listOfRestaurants.length === 0 ? <Shimmer/> :(
       <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={
               (e) => {setSearchText(e.target.value)}
               }/>
              <button onClick={() => {
                console.log(searchText);
                const filteredRestaurant = listOfRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }
              }>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
               filteredList=listOfRestaurants.filter((res)=>res.info.avgRating > 4);
               setFilteredRestaurant(filteredList);
               }}
               >Top Rated Restaurants</button>
            </div>
          <div className="res-container">
             {filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};
          </div>
       </div>
    )
 }


 export default Body;