import "./index.css";
import TabItem from "../../components/TabItem";

const items = [
  {
    tab: "Search",
    img: "search.svg",
  },
  {
    tab: "Restaurant",
    img: "restaurant.svg",
  },
  {
    tab: "Offers",
    img: "discount.svg",
  },
  {
    tab: "Help",
    img: "help.svg",
  },
  {
    tab: "My Cart",
    img: "cart.svg",
  },
  {
    tab: "Login",
    img: "login.svg",
  },
];

const Header = (props) => {
  return (
    <div>
      <div className="header-cont">
        <div className="img-container">
          <img src="trans_logo.png" alt="logo" className="header-img" />
        </div>
        {/* <div className="nav-bar">
          <div className="nav-tag-container">
            <p className="nav-para">Search</p>
            <img src="search.svg" className="header-img" />
          </div>

          <p className="nav-para">Restaruants</p>
          <p className="nav-para">Offers</p>
          <p className="nav-para">Helo</p>
          <p className="nav-para">My Cart</p>
          <p className="nav-para">Login</p>
        </div> */}

        <div className="nav-bar">
          <div className="nav-tag-container">
            {items.map((items) => {
              return <TabItem items={items} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
