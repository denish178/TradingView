import React from "react";
import "./Universe.css"; // Import the corresponding CSS file

function Universe() {
  return (
    <div className="container universe-section mt-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="universe-heading">The TradingView Universe</h1>
          <p className="universe-subheading">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row mt-4 align-items-stretch">
        {/* Partner 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="partner-card">
            <div className="partner-logo-container">
              <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" />
            </div>
            <p className="partner-description">Thematic investment platform</p>
          </div>
        </div>
        {/* Partner 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="partner-card">
            <div className="partner-logo-container">
              <img src="media/images/streakLogo.png" alt="Streak Logo" />
            </div>
            <p className="partner-description">Algo & strategy platform</p>
          </div>
        </div>
        {/* Partner 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="partner-card">
            <div className="partner-logo-container">
              <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" />
            </div>
            <p className="partner-description">Options trading platform</p>
          </div>
        </div>
        {/* Partner 4 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="partner-card">
            <div className="partner-logo-container">
              <img
                src="media/images/zerodhaFundHouse.png"
                alt="Zerodha Fundhouse Logo"
              />
            </div>
            <p className="partner-description">Asset management</p>
          </div>
        </div>
        {/* Partner 5 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="partner-card">
            <div className="partner-logo-container">
              <img src="media/images/goldenPiLogo.png" alt="GoldenPi Logo" />
            </div>
            <p className="partner-description">Bonds trading platform</p>
          </div>
        </div>
        {/* Partner 6 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="partner-card">
            <div className="partner-logo-container">
              <img src="media/images/dittoLogo.png" alt="Ditto Logo" />
            </div>
            <p className="partner-description">Insurance</p>
          </div>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col">
          <button className="btn btn-primary fs-5">Signup Now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
