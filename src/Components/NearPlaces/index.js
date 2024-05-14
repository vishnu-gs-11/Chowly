import "./index.css";

const NearPlaces = (props) => {
  const { nearPlace } = props;
  const { receipe, restaurant, place, rate, distance } = nearPlace;

  return (
    <div className="near-places-container">
      <div className="near-places-details">
        <p className="top-name">{receipe}</p>
        <p className="middle-name">{restaurant}</p>
        <p className="bottom-name">{place}</p>
        <p className="bottom-name">{rate}</p>
        <p className="bottom-name">{distance}</p>
      </div>
    </div>
  );
};

export default NearPlaces;
