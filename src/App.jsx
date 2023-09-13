import { useState } from "react";
import "./App.scss";
import Switch from "./Switch";
import "./switch.scss";

export default function App() {
  const [sliderValue, setSliderValue] = useState(3);
  const [toggleValue, setToggleValue] = useState(false);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  const valueMappingsM = {
    1: { pageviews: "10k", price: "$2.00" },
    2: { pageviews: "50k", price: "$8.00" },
    3: { pageviews: "100k", price: "$16.00" },
    4: { pageviews: "200k", price: "$24.00" },
    5: { pageviews: "300k", price: "$36.00" },
  };

  const valueMappingsY = {
    1: { pageviews: "10k", price: "$18.00" },
    2: { pageviews: "50k", price: "$72.00" },
    3: { pageviews: "100k", price: "$150.00" },
    4: { pageviews: "200k", price: "$216.00" },
    5: { pageviews: "300k", price: "$324.00" },
  };

  const valueMappings = toggleValue ? valueMappingsY : valueMappingsM;

  return (
    <div className="main">
      <div className="main__perdate">
        <p className="main__pageview">
          {valueMappings[sliderValue].pageviews} pageviews
        </p>
        <div className="main__pricedate">
          <span className="main__price">
            {valueMappings[sliderValue].price}
          </span>
          <span className="main__date">
            {" "}
            / {toggleValue ? "yearly" : "monthly"}
          </span>
        </div>
      </div>
      <div className="main__slider">
        <input
          type="range"
          id="slider"
          className="slider"
          step="1"
          min="1"
          max="5"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
      <div className="main__dateToggle">
        <div className="main__onlytoggle">
          <p className="main__datetext" id="monthly">
            Monthly Billing
          </p>
          <Switch
            isOn={toggleValue}
            handleToggle={() => setToggleValue(!toggleValue)}
          />
          <p className="main__datetext" id="yearly">
            Yearly Billing
          </p>
        </div>
        <div className="main__yr--active">
          {toggleValue && <p className="main__discount">25% discount</p>}
        </div>
      </div>
    </div>
  );
}
