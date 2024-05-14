import "./index.css";

const TabItem = (props) => {
  const { items } = props;
  const { tab, img } = items;

  return (
    <div>
      <div className="nav-item-container nav-para">
        <p className="nav-para">{tab}</p>
        <img src={img} className="icon-img" alt={tab} />
      </div>
    </div>
  );
};

export default TabItem;
