import { Component } from "react";
import "./index.css";
import Header from "../../components/Header";
import HighSales from "../../components/HighSales";
import Restaurants from "../../components/Restaurants";
import NearPlaces from "../../components/NearPlaces";
import TastyFoods from "../../components/TastyFoods";
import AppSubscription from "../../components/AppSubscription";
import Footer from "../../components/Footer";

const highSales = [
  {
    imageUrl: "biryani.png",
    name: "Biryani",
    id: 1,
  },
  {
    imageUrl: "burger.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
  {
    imageUrl: "chinese.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
  {
    imageUrl: "idli.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
  {
    imageUrl: "noodles.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
  {
    imageUrl: "parotta.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
  {
    imageUrl: "pizza.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
  {
    imageUrl: "rolls.png",
    name: "The Big Cheesy Bur",
    id: 1,
  },
];

const restaurants = [
  {
    name: "Thalapakatti",
    place: "Dindigul",
  },
  {
    name: "Murugan Idli Shop",
    place: "Madurai",
  },
  {
    name: "Chola Restaurant",
    place: "Thanjavur",
  },
  {
    name: "Ahaaram ",
    place: "Hosur",
  },
  {
    name: "HillTop",
    place: "Kodaikanal",
  },
];

const nearPlace = [
  {
    receipe: "Masal Dosa",
    restaurant: "Chinese Food stall",
    place: "Chennai",
    rate: "4.5 *",
    distance: "2 Km away",
  },
  {
    receipe: "Podi Idli",
    restaurant: "Tamizhan Restaurant",
    place: "Virudhunagar",
    rate: "4.8 *",
    distance: "8 Km away",
  },
  {
    receipe: "Biriyani",
    restaurant: "Maasha Allah Restaurant",
    place: "Madurai",
    rate: "4.5 *",
    distance: "6 Km away",
  },
  {
    receipe: "Kizhi Parrota",
    restaurant: "Murugan Hotel",
    place: "Madurai",
    rate: "4.5 *",
    distance: "7 Km away",
  },
  {
    receipe: "Tamizhan Foods",
    restaurant: "Kongu Restaurant",
    place: "Coimbotore",
    rate: "4.3 *",
    distance: "9 Km away",
  },
  {
    receipe: "Noodles",
    restaurant: "Thai Fast Foods",
    place: "Salem",
    rate: "4.5 *",
    distance: "5 Km away",
  },
  {
    receipe: "Parrota",
    restaurant: "Meenakshi Parrota Stall",
    place: "Madurai",
    rate: "4.9 *",
    distance: "4 Km away",
  },
];

const tastyFoods = [
  {
    imageUrl: "tasty1.png",
    receipe: "Chappathi",
    offer: "35%",
    place: "Coimbatore",
  },
  {
    imageUrl: "tasty2.png",
    receipe: "Veg Roll",
    offer: "45%",
    place: "Madurai",
  },
  {
    imageUrl: "tasty3.png",
    receipe: "Chicken",
    offer: "25%",
    place: "Chennai",
  },
  {
    imageUrl: "tasty4.png",
    receipe: "Cakes",
    offer: "15%",
    place: "Tirunelveli",
  },
  {
    imageUrl: "tasty5.png",
    receipe: "Tandoori",
    offer: "35%",
    place: "Salem",
  },
  {
    imageUrl: "tasty6.png",
    receipe: "Pizza",
    offer: "35%",
    place: "Thanjavur",
  },
];

class Chowly extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <h1>Chowly</h1> */}

          {/* Component -> Structuring all parts together */}
          {/* Class file exported to src/App.js file */}

          {/* <Header />
          <TabItem />
          <HighSales />
          <Restaruants />
          <TastyFoods />
          <NearPlaces />
          <AppSubscription />
          <Footer /> */}

          <Header />
          <div className="heading-container">
            <h8 className="heading">Highly selling Foods</h8>
          </div>
          <div className="description-container">
            {highSales.map((highSales) => {
              return <HighSales highSales={highSales} />;
            })}
          </div>
          <div className="heading-container">
            <h8 className="heading">Restaruants</h8>
          </div>
          <div className="description-container">
            {restaurants.map((restaurants) => {
              return <Restaurants restaurants={restaurants} />;
            })}
          </div>
          <div className="heading-container">
            <h8 className="heading">Nearby Places to visit</h8>
          </div>
          <div className="description-container">
            {nearPlace.map((nearPlace) => {
              return <NearPlaces nearPlace={nearPlace} />;
            })}
          </div>
          <AppSubscription />
          <div className="heading-container">
            <h8 className="heading">Delicious foods for ever ....</h8>
          </div>

          <div className="description-container">
            {tastyFoods.map((tastyFoods) => {
              return <TastyFoods tastyFoods={tastyFoods} />;
            })}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Chowly;
