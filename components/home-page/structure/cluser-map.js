import ReactMapGL, {
  Marker,
  NavigationControl,
  Popup,
  Map,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import React, { useEffect, useRef, useState } from "react";
import GeocoderControl from "../geocoder";
import Link from "next/link";
import Image from "next/image";

function CluserMap(props) {
  const [selectedLake, setSelectedLake] = useState();

  useEffect(() => {
    const listener = (event) => {
      if (event.key === "Escape") {
        setSelectedLake(null);
      }
    };
    window.addEventListener("keydown", listener);
  }, []);

  const mapRef = useRef(null);

  return (
    <React.Fragment>
      <div className="hue-rotate-[-30deg] saturate-[0.2] grayscale-[30%] brightness-105 w-full h-full overflow-hidden">
        <Map
          initialViewState={{
            longitude: 19.701310233479273,
            latitude: 51.54748821096632,
            zoom: 3,
          }}
          pitch={40}
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          ref={mapRef}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            position="top-left"
          />
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          {props.lakes.map((lake) => (
            <Marker
              key={lake._id}
              longitude={lake.geometry.coordinates[0]}
              latitude={lake.geometry.coordinates[1]}
              color="black"
              anchor="top"
              onClick={() => {
                setSelectedLake(lake);
              }}
            ></Marker>
          ))}
          {selectedLake && (
            <Popup
              key={selectedLake._id}
              longitude={selectedLake.geometry.coordinates[0]}
              latitude={selectedLake.geometry.coordinates[1]}
              closeOnClick={false}
              onClose={() => {
                setSelectedLake(null);
              }}
            >
              <div>
                <Link href={`/list/${selectedLake._id}`}>
                  {selectedLake.title} →
                </Link>
                <div className="mt-2 w-[10rem] h-[5rem]">
                  <Image
                    src={selectedLake.images[0].url}
                    alt="Image"
                    placeholder="blur"
                    height={1000}
                    width={1000}
                    blurDataURL={selectedLake.images[0].url}
                    className="absolute w-[90%] h-[65%] object-cover overflow-hidden"
                  />
                </div>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </React.Fragment>
  );
}

export default CluserMap;
