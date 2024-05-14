import "./index.css";

const Restaurants = (props) => {
  const { restaurants } = props;
  const { name, place } = restaurants;
  return (
    <div className="restaurant-container">
      <div className="restaurant-details">
        <p className="restarunat-name top-name">{name}</p>
        <p className="middle-name">{place}</p>
        <a href="#" className="bottom-name">
          visit restaurant
        </a>
      </div>
    </div>
  );
};

export default Restaurants;
