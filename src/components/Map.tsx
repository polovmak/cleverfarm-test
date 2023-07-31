import { useEffect, useRef, useState } from "react";
import { Feature, Map, View } from "ol";
import { Zoom } from "ol/control";
import { transform } from "ol/proj";
import { Point } from "ol/geom";
import { Vector } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Circle, Fill, Style } from "ol/style";
import TileLayer from "ol/layer/Tile";

interface IMapComponentProps {
  coordinates: [number, number];
}

export const MapComponent = ({ coordinates }: IMapComponentProps) => {
  const mapTargetElement = useRef<HTMLDivElement>(null);
  const [, setMap] = useState<Map | undefined>();
  const zoomControl = new Zoom({});
  useEffect(() => {
    const pointCenter = transform(
      [coordinates[0], coordinates[1]],
      "EPSG:4326",
      "EPSG:3857",
    );
    const point = new Point(pointCenter);
    const feature = new Feature({
      geometry: point,
    });
    const vectorLayer = new Vector({
      source: new VectorSource({
        features: [feature],
      }),
      style: new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({ color: "red" }),
        }),
      }),
    });
    const map = new Map({
      layers: [new TileLayer({ source: new OSM() })],
      controls: [zoomControl],
      view: new View({
        center: pointCenter,
        zoom: 15,
        minZoom: 0,
        maxZoom: 28,
      }),
    });
    map.addLayer(vectorLayer);
    map.setTarget(mapTargetElement.current || "");
    setMap(map);
    return () => map.setTarget("");
  }, [coordinates]);

  return (
    <div
      ref={mapTargetElement}
      style={{
        width: "100%",
        height: "600px",
        position: "relative",
      }}
    />
  );
};
