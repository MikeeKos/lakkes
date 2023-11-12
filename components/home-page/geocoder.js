import { useState } from "react";
import { useControl, Marker, MarkerProps, ControlPosition } from "react-map-gl";
import MapboxGeocoder, { GeocoderOptions } from "@mapbox/mapbox-gl-geocoder";

export default function GeocoderControl(props) {
  const [marker, setMarker] = useState(null);

  useControl(() => {
    const ctrl = new MapboxGeocoder({
      ...props,
      marker: false,
      accessToken: props.mapboxAccessToken,
    });
    ctrl.on("result", (evt) => {
      props.onResult(evt);
    });
    ctrl.on("error", props.onError);
    return ctrl;
  });
  return marker;
}

const noop = () => {};

GeocoderControl.defaultProps = {
  marker: true,
  onLoading: noop,
  onResults: noop,
  onResult: noop,
  onError: noop,
};
