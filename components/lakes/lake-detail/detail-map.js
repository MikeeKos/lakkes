import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Source,
  Layer,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import React from "react";
import GeocoderControl from "../../../components/home-page/geocoder";

function DetailMap(props) {
  const skyLayer = {
    id: "sky",
    type: "sky",
    paint: {
      "sky-type": "atmosphere",
      "sky-atmosphere-sun": [0.0, 0.0],
      "sky-atmosphere-sun-intensity": 15,
    },
  };

  let config = {};
  if (props.sateliteMap) {
    config = { source: "mapbox-dem", exaggeration: 1.5 };
  } else {
    config = {};
  }

  const filter = props.sateliteMap
    ? "saturate-[0.8] grayscale-[10%] brightness-125"
    : "hue-rotate-[-30deg] saturate-[0.2] grayscale-[30%] brightness-105";

  return (
    <React.Fragment>
      <div className={`${filter} w-full h-full overflow-hidden`}>
        <Map
          initialViewState={{
            longitude: props.initialCoordsFromEditPage.lng,
            latitude: props.initialCoordsFromEditPage.lat,
            zoom: 5,
          }}
          pitch={40}
          mapStyle={
            props.sateliteMap
              ? "mapbox://styles/mapbox/satellite-v9"
              : "mapbox://styles/mapbox/outdoors-v12"
          }
          terrain={config}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            position="top-left"
          />
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <Marker
            key="Marker"
            longitude={props.initialCoordsFromEditPage.lng}
            latitude={props.initialCoordsFromEditPage.lat}
            color="black"
          />
          <Source
            id="mapbox-dem"
            type="raster-dem"
            url="mapbox://mapbox.mapbox-terrain-dem-v1"
            tileSize={512}
            maxzoom={14}
          />
          {props.sateliteMap && <Layer {...skyLayer} />}
        </Map>
      </div>
    </React.Fragment>
  );
}

export default DetailMap;
