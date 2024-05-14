import "./index.css";
const TastyFoods = (props) => {
  const { tastyFoods } = props;
  const { imageUrl, receipe, offer, place } = tastyFoods;

  return (
    <div className="tasty-container">
      <div className="tasty-detalis">
        <div className="tasty-img-container">
          <img src={imageUrl} className="tasty-img" alt="tast-food" />
        </div>
        <p className="top-name">{receipe}</p>
        <p className="middle-name">{offer}</p>
        <p className="bottom-name">{place}</p>
      </div>
    </div>
  );
};

export default TastyFoods;
