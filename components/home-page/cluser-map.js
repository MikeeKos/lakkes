// import classes from "./cluser-map.module.css";
// import ReactMapGL, {
//   Marker,
//   NavigationControl,
//   Popup,
//   Source,
//   Layer,
// } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// // import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
// // import GeocoderControl from "./geocoder";

// function CluserMap(props) {
//   const [selectedLake, setSelectedLake] = useState();

//   useEffect(() => {
//     const listener = (event) => {
//       if (event.key === "Escape") {
//         setSelectedLake(null);
//       }
//     };
//     window.addEventListener("keydown", listener);
//   }, []);
//   // console.log("___IS THERE DATA___");
//   // console.log(props.lakes);
//   // console.log("___MARKER CHECK___");
//   // const longitude = props.lakes[0].geometry.coordinates[0];
//   // const latitude = props.lakes[0].geometry.coordinates[1];

//   // props.lakes.map((lake) => {
//   //   console.log(lake._id);
//   //   console.log(lake.geometry.coordinates[0]);
//   //   console.log(lake.geometry.coordinates[1]);
//   // });
//   console.log(selectedLake);

//   const skyLayer = {
//     id: "sky",
//     type: "sky",
//     paint: {
//       "sky-type": "atmosphere",
//       "sky-atmosphere-sun": [0.0, 0.0],
//       "sky-atmosphere-sun-intensity": 15,
//     },
//   };

//   return (
//     <React.Fragment>
//       <div className={classes["mapboxgl-canvas"]}>
//         <ReactMapGL
//           mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//           initialViewState={{
//             longitude: 18.110524,
//             latitude: 50.38205,
//             zoom: 8,
//             pitch: 40,
//           }}
//           // mapbox://styles/mapbox/satellite-v9
//           // mapStyle="mapbox://styles/mapbox/dark-v10"
//           mapStyle="mapbox://styles/mapbox/satellite-v9"
//           terrain={{source: 'mapbox-dem', exaggeration: 5.5}}
//         >
//           {/* <GeocoderControl
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             position="top-left"
//           /> */}
//           {/* <GeolocateControl position="top-left" /> */}
//           {/* <FullscreenControl position="top-left" /> */}
//           <NavigationControl position="top-left" />
//           {props.lakes.map((lake) => (
//             <Marker
//               key={lake._id}
//               longitude={lake.geometry.coordinates[0]}
//               latitude={lake.geometry.coordinates[1]}
//               color="white"
//             >
//               <div>
//                 <button
//                   onClick={(event) => {
//                     event.preventDefault();
//                     setSelectedLake(lake);
//                   }}
//                 >
//                   {lake.title}
//                 </button>
//                 {/* <Link href={`/list/${lake._id}`}>
//                   <div>
//                     CLICK HERE
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
//                     </svg>
//                   </div>
//                 </Link> */}
//               </div>
//             </Marker>

//             // console.log("____CHECKING____")
//             // console.log(lake._id);
//             // console.log(lake.geometry.coordinates[0]);
//             // console.log(lake.geometry.coordinates[1]);
//             // <Marker key={lake.id} longitude={lake.geometry.coordinates[0]} latitude={lake.geometry.coordinates[1]} color="white"></Marker>
//           ))}
//           {selectedLake && (
//             <Popup
//               key={selectedLake._id}
//               longitude={selectedLake.geometry.coordinates[0]}
//               latitude={selectedLake.geometry.coordinates[1]}
//               closeOnClick={false}
//               onClose={() => {
//                 setSelectedLake(null);
//               }}
//             >
//               <div>
//                 <Link href={`/list/${selectedLake._id}`}>
//                   {selectedLake.title}
//                 </Link>
//               </div>
//             </Popup>
//           )}
//           <Source
//             id="mapbox-dem"
//             type="raster-dem"
//             url="mapbox://mapbox.mapbox-terrain-dem-v1"
//             tileSize={512}
//             maxzoom={14}
//           />
//           <Layer {...skyLayer} />
//         </ReactMapGL>
//       </div>
//       <div style={{ marginTop: "400px" }}></div>
//     </React.Fragment>
//   );
// }

// export default CluserMap;

// import classes from "./cluser-map.module.css";
// import ReactMapGL, {
//   Marker,
//   NavigationControl,
//   Popup,
//   Source,
//   Layer,
//   Map,
//   GeolocateControl,
//   FullscreenControl,
//   ScaleControl,
// } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
// import React, { useEffect, useRef, useState } from "react";
// import GeocoderControl from "./geocoder";

// function CluserMap(props) {
//   const clusterLayer = {
//     id: "clusters",
//     type: "circle",
//     source: "lakes",
//     filter: ["has", "point_count"],
//     paint: {
//       "circle-color": [
//         "step",
//         ["get", "point_count"],
//         "#51bbd6",
//         100,
//         "#f1f075",
//         750,
//         "#f28cb1",
//       ],
//       "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
//     },
//   };

//   const clusterCountLayer = {
//     id: "cluster-count",
//     type: "symbol",
//     source: "lakes",
//     filter: ["has", "point_count"],
//     layout: {
//       "text-field": "{point_count_abbreviated}",
//       "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
//       "text-size": 12,
//     },
//   };

//   const unclusteredPointLayer = {
//     id: "unclustered-point",
//     type: "circle",
//     source: "lakes",
//     filter: ["!", ["has", "point_count"]],
//     paint: {
//       "circle-color": "#11b4da",
//       "circle-radius": 4,
//       "circle-stroke-width": 1,
//       "circle-stroke-color": "#fff",
//     },
//   };

//   const mapRef = useRef(null);
//   const [selectedPoint, setSelectedPoint] = useState(null);

//   // {props.lakes.map((lake) => (
//   //   <Marker
//   //     key={lake._id}
//   //     longitude={lake.geometry.coordinates[0]}
//   //     latitude={lake.geometry.coordinates[1]}
//   //     color="white"
//   //   >
//   //     <div>
//   //       <button>Lake</button>
//   //     </div>
//   //   </Marker>
//   // ))}

//   const onClick = (event) => {
//     // console.log(event);
//     //CHECK DOCS
//     //https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson
//     //AND MAKE EXACT ARRAY
//     // console.log(mapRef.current.getSource('lakes'));
//     console.log(event.features);
//     if (event.features[0]) {
//       // console.log(event.features[0].properties)
//       const feature = event.features[0];
//       const clusterId = feature.properties.cluster_id;

//       const mapboxSource = mapRef.current.getSource("lakes");

//       mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
//         if (err) {
//           return;
//         }

//         mapRef.current.easeTo({
//           center: feature.geometry.coordinates,
//           zoom,
//           duration: 700,
//         });
//       });
//     }
//   };

//   // const elements = props.lakes.map((lake) => ({
//   //   type: "Feature",
//   //   properties: {
//   //     ...lake,
//   //     clusterId: lake._id,
//   //     cluster: false
//   //   },
//   //   geometry: {
//   //     ...lake.geometry,
//   //   },
//   // }));
//   const mapData = { features: [...props.lakes] };
//   // const mapData = {features: [...elements]}

//   return (
//     <React.Fragment>
//       <div className={classes["mapboxgl-canvas"]}>
//         <Map
//           initialViewState={{
//             latitude: 40.67,
//             longitude: -103.59,
//             zoom: 3,
//             // longitude: 18.110524,
//             // latitude: 50.38205,
//             // zoom: 8,
//             // pitch: 40,
//           }}
//           mapStyle="mapbox://styles/mapbox/dark-v9"
//           mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//           interactiveLayerIds={[clusterLayer.id]}
//           onClick={onClick}
//           ref={mapRef}
//         >
//           <GeocoderControl
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             position="top-left"
//           />
//           <GeolocateControl position="top-left" />
//           <FullscreenControl position="top-left" />
//           <NavigationControl position="top-left" />
//           <Source
//             id="lakes"
//             type="geojson"
//             data={mapData}
//             cluster={true}
//             clusterMaxZoom={14}
//             clusterRadius={50}
//           >
//             <Layer {...clusterLayer} />
//             <Layer {...clusterCountLayer} />
//             <Layer {...unclusteredPointLayer} />
//             {/* {props.lakes.map((lake) => (
//               <Marker
//                 key={lake._id}
//                 longitude={lake.geometry.coordinates[0]}
//                 latitude={lake.geometry.coordinates[1]}
//                 color="white"
//               >
//                 <div>
//                   <button>Lake</button>
//                 </div>
//               </Marker>
//             ))} */}
//           </Source>
//         </Map>
//       </div>
//       <div style={{ marginTop: "400px" }}></div>
//     </React.Fragment>
//   );
// }

// export default CluserMap;

// import classes from "./cluser-map.module.css";
import ReactMapGL, {
  Marker,
  NavigationControl,
  Popup,
  Source,
  Layer,
  Map,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import React, { useEffect, useRef, useState } from "react";
import GeocoderControl from "./geocoder";
import Link from "next/link";

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
  // const [selectedPoint, setSelectedPoint] = useState(null);
  // const [zoomLevel, setZoomLevel] = useState(5);
  // const [flyToCoordinates, setFlyToCoordinates] = useState();

  // {props.lakes.map((lake) => (
  //   <Marker
  //     key={lake._id}
  //     longitude={lake.geometry.coordinates[0]}
  //     latitude={lake.geometry.coordinates[1]}
  //     color="white"
  //   >
  //     <div>
  //       <button>Lake</button>
  //     </div>
  //   </Marker>
  // ))}

  const onClick = (event) => {
    // console.log(event.lngLat);
    console.log(event);
    // mapRef.current.easeTo({
    //   center: flyToCoordinates,
    //   zoom: 10,
    //   duration: 2000,
    // });
    // mapRef.current.flyTo({center: [event.lngLat.lng, event.lngLat.lat], duration: 2000});
    // mapRef.current.easeTo({
    //   center: event.lngLat,
    //   zoom: zoomLevel + 1,
    //   duration: 700,
    // });
    // console.log(event);
    //CHECK DOCS
    //https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson
    //AND MAKE EXACT ARRAY
    // console.log(mapRef.current.getSource('lakes'));
    // console.log(event.features);
    // if (event.features[0]) {
    //   // console.log(event.features[0].properties)
    //   const feature = event.features[0];
    //   const clusterId = feature.properties.cluster_id;

    //   const mapboxSource = mapRef.current.getSource("lakes");

    //   mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
    //     if (err) {
    //       return;
    //     }

    //     mapRef.current.easeTo({
    //       center: feature.geometry.coordinates,
    //       zoom,
    //       duration: 700,
    //     });
    //   });
    // }
  };

  // const elements = props.lakes.map((lake) => ({
  //   type: "Feature",
  //   properties: {
  //     ...lake,
  //     clusterId: lake._id,
  //     cluster: false
  //   },
  //   geometry: {
  //     ...lake.geometry,
  //   },
  // }));
  // const mapData = { features: [...props.lakes] };
  // const mapData = {features: [...elements]}

  return (
    <React.Fragment>
      {/* <div className={classes["mapboxgl-canvas"]}> */}
      <div className="hue-rotate-[-30deg] saturate-[0.30] grayscale-[30%] w-full h-full overflow-hidden">
        {/* <div className="opacity-30 h-5 bg-gradient-to-b from-white to-pageMenu"></div> */}
        <Map
          initialViewState={{
            // latitude: 40.67,
            // longitude: -103.59,
            // zoom: 3,
            longitude: 19.701310233479273,
            latitude: 51.54748821096632,
            zoom: 5,
            // pitch: 40,
          }}
          pitch={40}
          // mapStyle="mapbox://styles/mapbox/dark-v9"
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
          // mapStyle="mapbox://styles/mapbox/satellite-v9"
          // terrain={{source: 'mapbox-dem', exaggeration: 11.5}}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          // interactiveLayerIds={[clusterLayer.id]}
          onClick={onClick}
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
              color="white"
            >
              <div>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedLake(lake);
                    // setFlyToCoordinates(lake.geometry.coordinates);
                  }}
                >
                  {lake.title}
                </button>
                {/* <Link href={`/list/${lake._id}`}>
                  <div>
                    CLICK HERE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                  </div>
                </Link> */}
              </div>
            </Marker>
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
                  {selectedLake.title}
                </Link>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </React.Fragment>
  );
}

export default CluserMap;
