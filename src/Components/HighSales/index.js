import "./index.css";

const HighSales = (props) => {
  const { highSales } = props;
  const { name, imageUrl } = highSales;
  return (
    <div>
      <div className="high-sale-box">
        <img src={imageUrl} className="high-sale-img" alt={name} />
        {/* <p>
                  {name}
                </p> */}
      </div>
    </div>
  );
};

export default HighSales;
