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
import React, { useEffect, useState } from "react";
import GeocoderControl from "../home-page/geocoder";

function FormMap(props) {
  const [marker, setMarker] = useState();

  console.log("___INITIAL COORDS____");
  console.log(props.initialCoordsFromEditPage);

  useEffect(() => {
    if (props.initialCoordsFromEditPage) {
      setMarker(props.initialCoordsFromEditPage);
    }
  }, []);

  const onMarkerDrag = (event) => {
    setMarker(event.lngLat);
    console.log(event.lngLat);
    props.sendDataToForm(event.lngLat);
  };

  const onMarkerDragEnd = (event) => {
    setMarker(event.lngLat);
    props.sendDataToForm(event.lngLat);
  };

  function onClick(event) {
    setMarker(event.lngLat);
    props.sendDataToForm(event.lngLat);
  }

  // const onMarkerDrag = useCallback((event) => {
  //   setMarker(event.lngLat);
  //   props.sendDataToForm(event.lngLat);
  // }, [props]);

  // const onMarkerDragEnd = useCallback((event) => {
  //   setMarker(event.lngLat);
  //   props.sendDataToForm(event.lngLat);
  // }, [props]);

  // const onClick = useCallback((event) => {
  //   setMarker(event.lngLat);
  //   props.sendDataToForm(event.lngLat);
  // }, [props]);

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

  const filter = props.sateliteMap ? "saturate-[0.8] grayscale-[10%] brightness-125" : "hue-rotate-[-30deg] saturate-[0.2] grayscale-[30%] brightness-105";

  return (
    <React.Fragment>
      <div className={`${filter} w-full h-full overflow-hidden border-4 border-pageMenu`}>
      {/* <div className={classes["mapboxgl-canvas"]}> */}
        <Map
          // initialViewState={initialViewState}
          initialViewState={{
            longitude: 19.701310233479273,
            latitude: 51.54748821096632,
            zoom: 5,
            // pitch: 40,
          }}
          pitch={40}
          mapStyle={
            props.sateliteMap
              ? "mapbox://styles/mapbox/satellite-v9"
              : "mapbox://styles/mapbox/outdoors-v12"
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
              color="black"
              draggable
              onDrag={onMarkerDrag}
              onDragEnd={onMarkerDragEnd}
            />
          )}
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

export default FormMap;
