import classes from "./formMap.module.css";
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
import React, { useState } from "react";
import GeocoderControl from "../home-page/geocoder";

// const initialViewState = {
  // latitude: 51.54748821096632,
  // longitude: 19.701310233479273,
  // zoom: 3.5,
  // pitch: 40,
// };

function FormMap(props) {
  const [marker, setMarker] = useState();
  console.log(props.sateliteMap);

  // const onMarkerDragStart = (event) => {
  //   console.log("___DRAG START___");
  // };

  const onMarkerDrag = (event) => {
    // console.log("___DRAGGING___");
    setMarker(event.lngLat);
    props.sendDataToForm(event.lngLat);
  };

  const onMarkerDragEnd = (event) => {
    // console.log("___DRAG STOP___");
    setMarker(event.lngLat);
    props.sendDataToForm(event.lngLat);
  };

  function onClick(event) {
    // console.log("___MAP CLICKED___");
    // console.log(event);
    setMarker(event.lngLat);
    props.sendDataToForm(event.lngLat);
  }

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
    config = { source: "mapbox-dem", exaggeration: 5.5 };
  } else {
    config = {};
  }

  return (
    <React.Fragment>
      <div className={classes["mapboxgl-canvas"]}>
        <Map
          // initialViewState={initialViewState}
          initialViewState={{
            latitude: 51.54748821096632,
            longitude: 19.701310233479273,
            zoom: 3.5,
            pitch: 40,
          }}
          mapStyle={
            props.sateliteMap
              ? "mapbox://styles/mapbox/satellite-v9"
              : "mapbox://styles/mapbox/dark-v9"
          }
          // mapStyle="mapbox://styles/mapbox/satellite-v9"
          terrain={config}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          onClick={onClick}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            position="top-left"
          />
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          {marker && (
            <Marker
              key="Marker"
              longitude={marker.lng}
              latitude={marker.lat}
              color="white"
              draggable
              // onDragStart={onMarkerDragStart}
              onDrag={onMarkerDrag}
              onDragEnd={onMarkerDragEnd}
            />
          )}
          {props.sateliteMap && (
            <Source
              id="mapbox-dem"
              type="raster-dem"
              url="mapbox://mapbox.mapbox-terrain-dem-v1"
              tileSize={512}
              maxzoom={14}
            />
          )}
          {props.sateliteMap && <Layer {...skyLayer} />}
        </Map>
      </div>
    </React.Fragment>
  );
}

export default FormMap;
