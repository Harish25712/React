import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
     return(
      <div className="header">
      <div className="logo-container">
      <img className="logo" src="data:image/png;base64,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" />
      </div>
      <div className="nav-items">
      <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
      </ul>
      </div>
      </div>
     );
}

const RestaurantCard = (props) => {
   const{resData} = props;
   const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData.info;
   const{deliveryTime}=resData.info.sla;
   return(
      <div className="res-card">
         <img className="res-logo" alt="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{costForTwo}</h4>
         <h4>{deliveryTime} minutes</h4>
      </div>
   )
}

const resList =  [ 
{
     "info": {
       "id": "24342",
       "name": "Domino's Pizza",
       "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
       "locality": "Okkim Thorapakkam (OMR)",
       "areaName": "Karapakkam",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Pizzas",
         "Italian",
         "Pastas",
         "Desserts"
       ],
       "avgRating": 4.3,
       "feeDetails": {
         "restaurantId": "24342",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "2456",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 25,
         "serviceability": "SERVICEABLE",
         "slaString": "25 mins",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 02:59:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹100 OFF",
         "subHeader": "ABOVE ₹999",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/dominos-pizza-okkim-thorapakkam-omr-karapakkam-chennai-24342",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "25404",
       "name": "Oven Story Pizza",
       "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
       "locality": "Thoraipakkam",
       "areaName": "Ezhil Nagar",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Pizzas",
         "Pastas",
         "Italian",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 3.8,
       "feeDetails": {
         "restaurantId": "25404",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "3534",
       "avgRatingString": "3.8",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "29-39 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:59:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹1099",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/oven-story-pizza-thoraipakkam-ezhil-nagar-chennai-25404",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "397765",
       "name": "Papacream",
       "cloudinaryImageId": "0fa9445dfa8839bba6091e6c4546d7c4",
       "locality": "Thoraipakkam",
       "areaName": "Thoraipakkam",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Ice Cream",
         "Desserts"
       ],
       "avgRating": 4.3,
       "veg": true,
       "feeDetails": {
         "restaurantId": "397765",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "22414",
       "avgRatingString": "4.3",
       "totalRatingsString": "50+",
       "sla": {
         "deliveryTime": 36,
         "lastMileTravel": 2.2,
         "serviceability": "SERVICEABLE",
         "slaString": "36 mins",
         "lastMileTravelString": "2.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 02:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹599",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/papacream-thoraipakkam-chennai-397765",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "141368",
       "name": "Starbucks Coffee",
       "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
       "locality": "BSR Building Chennai",
       "areaName": "Perungudi",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Beverages",
         "Cafe",
         "Snacks",
         "Desserts",
         "Bakery",
         "Ice Cream"
       ],
       "avgRating": 4.3,
       "feeDetails": {
         "restaurantId": "141368",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "195515",
       "avgRatingString": "4.3",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 35,
         "lastMileTravel": 2.5,
         "serviceability": "SERVICEABLE",
         "slaString": "35 mins",
         "lastMileTravelString": "2.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:59:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "ABOVE ₹800",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/starbucks-coffee-bsr-building-perungudi-chennai-141368",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "146083",
       "name": "Subway",
       "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
       "locality": "Vinayaga Avenue",
       "areaName": "Thoraipakkam",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Salads",
         "Snacks",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 3.8,
       "feeDetails": {
         "restaurantId": "146083",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "2",
       "avgRatingString": "3.8",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 45,
         "lastMileTravel": 2.5,
         "serviceability": "SERVICEABLE",
         "slaString": "45 mins",
         "lastMileTravelString": "2.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 03:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹60"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/subway-vinayaga-avenue-thoraipakkam-chennai-146083",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "234986",
       "name": "McDonald's",
       "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
       "locality": "Gire Thoraipakkam",
       "areaName": "Nehru Nagar",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
       ],
       "avgRating": 4.3,
       "feeDetails": {
         "restaurantId": "234986",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "630",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 43,
         "lastMileTravel": 2.1,
         "serviceability": "SERVICEABLE",
         "slaString": "43 mins",
         "lastMileTravelString": "2.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 00:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/mcdonalds-gire-thoraipakkam-nehru-nagar-chennai-234986",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "17824",
       "name": "KFC",
       "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
       "locality": "OMR",
       "areaName": "OMR-Perungudi",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Burgers",
         "Biryani",
         "American",
         "Snacks",
         "Fast Food"
       ],
       "avgRating": 4.1,
       "feeDetails": {
         "restaurantId": "17824",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "547",
       "avgRatingString": "4.1",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 40,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "40 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 02:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/kfc-omr-omr-perungudi-chennai-17824",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "69527",
       "name": "Pizza Hut",
       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
       "locality": "Old Mahabalipuram Road OMR",
       "areaName": "Old Mahabalipuram Road OMR",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Pizzas"
       ],
       "avgRating": 3.8,
       "feeDetails": {
         "restaurantId": "69527",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "721",
       "avgRatingString": "3.8",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 47,
         "lastMileTravel": 2.7,
         "serviceability": "SERVICEABLE",
         "slaString": "47 mins",
         "lastMileTravelString": "2.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 00:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/pizza-hut-old-mahabalipuram-road-omr-chennai-69527",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "307780",
       "name": "Barbeque Nation",
       "cloudinaryImageId": "ajmtkvs0nhmk4fhcxwjf",
       "locality": "Thuraipakkam",
       "areaName": "Thuraipakkam",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "North Indian",
         "Barbecue",
         "Biryani",
         "Kebabs",
         "Mughlai",
         "Desserts"
       ],
       "avgRating": 3.7,
       "feeDetails": {
         "restaurantId": "307780",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "2438",
       "avgRatingString": "3.7",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 0.6,
         "serviceability": "SERVICEABLE",
         "slaString": "44 mins",
         "lastMileTravelString": "0.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:30:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "15% OFF",
         "subHeader": "ABOVE ₹400",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/barbeque-nation-thuraipakkam-chennai-307780",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "121344",
       "name": "Flower Drum",
       "cloudinaryImageId": "5ec1629d92156d2661a5da51d7d24d4d",
       "locality": "Thuraipakkam",
       "areaName": "Thuraipakkam",
       "costForTwo": "₹1100 for two",
       "cuisines": [
         "Chinese"
       ],
       "avgRating": 4.3,
       "veg": true,
       "feeDetails": {
         "restaurantId": "121344",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "3289",
       "avgRatingString": "4.3",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 2.5,
         "serviceability": "SERVICEABLE",
         "slaString": "44 mins",
         "lastMileTravelString": "2.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 22:45:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "ABOVE ₹800",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/flower-drum-thuraipakkam-chennai-121344",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "20711",
       "name": "Savoury Sea Shell",
       "cloudinaryImageId": "hvyrcnw4zfc1la5ggy7c",
       "locality": "Karappakam",
       "areaName": "Sri Sowdeswari Nagar",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Chinese",
         "Indian",
         "Arabian",
         "Kerala",
         "Continental",
         "Italian",
         "Tandoor"
       ],
       "avgRating": 4.2,
       "feeDetails": {
         "restaurantId": "20711",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "4252",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 50,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "50 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:20:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/savoury-sea-shell-karappakam-sri-sowdeswari-nagar-chennai-20711",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "444674",
       "name": "Andhra Gunpowder",
       "cloudinaryImageId": "o18xlrtaxapi2bq7rpoz",
       "locality": "Thoraipakkam",
       "areaName": "OMR Perungudi",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Andhra",
         "Biryani",
         "South Indian"
       ],
       "avgRating": 4.2,
       "feeDetails": {
         "restaurantId": "444674",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "10496",
       "avgRatingString": "4.2",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 41,
         "lastMileTravel": 2.3,
         "serviceability": "SERVICEABLE",
         "slaString": "41 mins",
         "lastMileTravelString": "2.3 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹499",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-thoraipakkam-omr-perungudi-chennai-444674",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "111136",
       "name": "The Kati Roll Shop",
       "cloudinaryImageId": "vrbdzrg8p2otyepsyhqv",
       "areaName": "Perungudi",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Fast Food"
       ],
       "avgRating": 3.9,
       "feeDetails": {
         "restaurantId": "111136",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "210407",
       "avgRatingString": "3.9",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 49,
         "lastMileTravel": 2.3,
         "serviceability": "SERVICEABLE",
         "slaString": "49 mins",
         "lastMileTravelString": "2.3 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:59:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹599",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/the-kati-roll-shop-perungudi-chennai-111136",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "395365",
       "name": "McDonald's Gourmet Burger Collection",
       "cloudinaryImageId": "eatjnqnudbkbbwnvjho4",
       "locality": "Gire Thoraipakkam",
       "areaName": "Karapakkam",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
       ],
       "avgRating": 4.3,
       "feeDetails": {
         "restaurantId": "395365",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "10761",
       "avgRatingString": "4.3",
       "totalRatingsString": "100+",
       "sla": {
         "deliveryTime": 42,
         "lastMileTravel": 2.1,
         "serviceability": "SERVICEABLE",
         "slaString": "42 mins",
         "lastMileTravelString": "2.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 00:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-gire-thoraipakkam-karapakkam-chennai-395365",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "264410",
       "name": "Wangs Kitchen",
       "cloudinaryImageId": "9360675ae1fd9641922459d53c8cfc46",
       "locality": "Thoraipakkam",
       "areaName": "Anand Nagar",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Chinese",
         "Asian"
       ],
       "avgRating": 3.8,
       "feeDetails": {
         "restaurantId": "264410",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "970",
       "avgRatingString": "3.8",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 60,
         "lastMileTravel": 2.2,
         "serviceability": "SERVICEABLE",
         "slaString": "60 mins",
         "lastMileTravelString": "2.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/wangs-kitchen-thoraipakkam-anand-nagar-chennai-264410",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "17989",
       "name": "Faasos - Wraps & Rolls",
       "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
       "locality": "Thoraipakkam",
       "areaName": "Ezhil Nagar",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Kebabs",
         "Fast Food",
         "Snacks",
         "North Indian",
         "American",
         "Healthy Food",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.1,
       "feeDetails": {
         "restaurantId": "17989",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "21809",
       "avgRatingString": "4.1",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 49,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "49 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:59:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-thoraipakkam-ezhil-nagar-chennai-17989",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "15179",
       "name": "Behrouz Biryani",
       "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
       "locality": "Old Mahapalipur Road",
       "areaName": "Ezhil Nagar",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Biryani",
         "Mughlai",
         "North Indian",
         "Lucknowi",
         "Hyderabadi",
         "Kebabs",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.1,
       "feeDetails": {
         "restaurantId": "15179",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 3400
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 3400
       },
       "parentId": "1803",
       "avgRatingString": "4.1",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "44 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:59:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/behrouz-biryani-old-mahapalipur-road-ezhil-nagar-chennai-15179",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "117179",
       "name": "The Bowl Company",
       "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
       "locality": "OMR Perungudi",
       "areaName": "Mcn Nagar",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Pan-Asian",
         "Continental",
         "North Indian",
         "Desserts",
         "American",
         "Asian",
         "Beverages",
         "Biryani",
         "Chinese",
         "European",
         "Grill",
         "Hyderabadi",
         "Indian",
         "Italian",
         "Kebabs",
         "Lucknowi",
         "Mediterranean",
         "Mexican",
         "Mughlai",
         "Oriental",
         "Pastas",
         "Punjabi",
         "Raja"
       ],
       "avgRating": 4.3,
       "feeDetails": {
         "restaurantId": "117179",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "4317",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 45,
         "lastMileTravel": 2.2,
         "serviceability": "SERVICEABLE",
         "slaString": "45 mins",
         "lastMileTravelString": "2.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
             "description": "OnlyOnSwiggy"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "OnlyOnSwiggy",
                   "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "EVERY ITEM",
         "subHeader": "@ ₹139"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/the-bowl-company-omr-perungudi-mcn-nagar-chennai-117179",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "237518",
       "name": "The Belgian Waffle Co.",
       "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
       "locality": "Old Mahabalipuram Rd",
       "areaName": "Perungudi",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Waffle",
         "Desserts",
         "Ice Cream",
         "Beverages"
       ],
       "avgRating": 4.6,
       "veg": true,
       "feeDetails": {
         "restaurantId": "237518",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "2233",
       "avgRatingString": "4.6",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 37,
         "lastMileTravel": 1.7,
         "serviceability": "SERVICEABLE",
         "slaString": "37 mins",
         "lastMileTravelString": "1.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-16 23:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-old-mahabalipuram-rd-perungudi-chennai-237518",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "203407",
       "name": "Wow! Momo",
       "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
       "locality": "Thuraipakkam",
       "areaName": "Thuraipakkam",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Tibetan",
         "Healthy Food",
         "Asian",
         "Chinese",
         "Snacks",
         "Continental",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4,
       "feeDetails": {
         "restaurantId": "203407",
         "fees": [
           {
             "name": "BASE_DISTANCE",
             "fee": 2900
           },
           {
             "name": "BASE_TIME"
           },
           {
             "name": "ANCILLARY_SURGE_FEE"
           }
         ],
         "totalFee": 2900
       },
       "parentId": "1776",
       "avgRatingString": "4.0",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 44,
         "lastMileTravel": 1.7,
         "serviceability": "SERVICEABLE",
         "slaString": "44 mins",
         "lastMileTravelString": "1.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2023-09-17 03:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/wow-momo-thuraipakkam-chennai-203407",
       "type": "WEBLINK"
     }
   }
 ]
const Body = () => {
   return(
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};
         </div>
      </div>
   )
}
const AppLayout = () => {
   return(
      <div className="app">
     <Header/>
     <Body/>
      </div>
   );
}

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout/>);
  
