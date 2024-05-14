import { Component } from "react";
import "./index.css";

class AppSubscription extends Component {
  render() {
    return (
      <div className="app-subs-con">
        <div className="app-subs-container">
          <div className="logo-subs-img-cont">
            <img
              src="trans_logo.png"
              className="app-subs-logog-img"
              alt="chowly-logo"
            />
          </div>
          <div className="subs-cont">
            <h4 className="subscribe-heading">Subscribe us..</h4>
            <p className="subscribe-para">
              Subscribe to our newsletter to get trending and new foods with
              discounts
            </p>
            <input placeholder="Enter your email address" type="text" />
            <div className="btn-container">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppSubscription;
