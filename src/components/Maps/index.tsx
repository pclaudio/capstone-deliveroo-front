import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const MyComponent = () => {
  const [center, setCenter] = useState({
    lat: -2.528856033502374,
    lng: -44.30060211846094,
  });
  const [zoom, setZoom] = useState(15);
  return (
    <>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBGi5cZECKHSgrhOomBLTsjDQiLTYE3Gtc" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={-2.528856033502374}
            lng={-44.30060211846094}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default MyComponent;
