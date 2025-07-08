import { Card } from "../../components/ui/card";
import { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    // Append Meteomatics CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://widget.meteomatics.com/v2/meteomatics-weather-widget.css";
    document.head.appendChild(link);

    // Append Meteomatics JS
    const script = document.createElement("script");
    script.src = "https://widget.meteomatics.com/v2/meteomatics-weather-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
      <div
        data-meteomatics-weather-widget="horizontal"
        data-meteomatics-weather-widget-color="primary"
        data-meteomatics-weather-widget-title="Patiala, India"
        data-meteomatics-weather-widget-latitude="30.3398"
        data-meteomatics-weather-widget-longitude="76.3869"
        data-meteomatics-weather-widget-measurement-unit-temperature="celsius"
      >
      </div>
  );
};

export default WeatherWidget;
