import { Component } from "react";
import "./index.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-container">
          <div className="footer-list">
            <div>
              <h1>Chowly - Food Ordering Site</h1>
              <div className="footer-logo-img-cont">
                <img
                  src="trans_logo.png"
                  className="footer-logo-img"
                  alt="logo-img"
                />
              </div>
              <p>
                Chowly is an online food ordering site that allows users to
                order food from a wide variety of restaurants.
              </p>
            </div>
            <div>
              <ul>
                <p>About Chowly</p>
                <li>Who we are</li>
                <li>Blog</li>
                <li>Work with us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Press Kit</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul>
                <p>Legal</p>
                <li>Terms and condition</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Press Kit</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <div>
                <p>Social Links</p>
              </div>
              <div className="social-icon-container">
                <div className="icon-container">
                  <img
                    src="facebook.png"
                    className="social-icon"
                    alt="social-logo"
                  />
                </div>
                <div>
                  <img
                    src="instagram.png"
                    className="social-icon"
                    alt="social-logo"
                  />
                </div>
                <div>
                  <img
                    src="youtube.png"
                    className="social-icon"
                    alt="social-logo"
                  />
                </div>
                <div>
                  <img
                    src="twitter.png"
                    className="social-icon"
                    alt="social-logo"
                  />
                </div>
              </div>
              <div>
                <div>
                  <p>Try our Mobile apps</p>
                </div>
                <div className="store-img-container">
                  <div>
                    <img
                      src="play_store.png"
                      className="store-img"
                      alt="play-store"
                    />
                  </div>
                  <div>
                    <img
                      src="app_store.png"
                      className="store-img"
                      alt="app-store"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-copy-cont">
            <p>
              © 2020 Chowly. All rights reserved. | Designed by Vishnu Ganesan
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
