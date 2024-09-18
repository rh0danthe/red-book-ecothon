import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  FeatureGroup,
  Tooltip,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { LatLngTuple } from "leaflet";
import { centerCoordinate, pathOptions } from "../../lib/constants/mapOptions";

interface IMapProps {
  className?: string;
  polygonCoordinates?: LatLngTuple[][];
  canEdit?: boolean;
  canDraw?: boolean;
  onCoordinatesChange?: (coordinates: LatLngTuple[][]) => void;
  names?: string[];
  animalId?: number;
}

function InteractiveMap({
  polygonCoordinates = [],
  canEdit = false,
  canDraw = false,
  className,
  onCoordinatesChange,
  names = [],
  animalId,
}: IMapProps) {
  const featureGroupRef = useRef<any>(null);

  useEffect(() => {
    if (featureGroupRef.current && polygonCoordinates.length > 0) {
      featureGroupRef.current.clearLayers();
      polygonCoordinates.forEach((coords) => {
        const polygon = L.polygon(coords, pathOptions);
        featureGroupRef.current.addLayer(polygon);
      });
    }
  }, [polygonCoordinates]);

  const onCreated = (e: any) => {
    const type = e.layerType;
    const layer = e.layer;

    if (type === "polygon") {
      const coordinates = layer
        .getLatLngs()[0]
        .map((latLng: any) => [latLng.lat, latLng.lng]);
      if (onCoordinatesChange) {
        onCoordinatesChange([coordinates]);
      }
    }
  };

  return (
    <MapContainer
      center={centerCoordinate}
      zoom={15}
      minZoom={2}
      maxZoom={50}
      scrollWheelZoom={true}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={centerCoordinate}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {polygonCoordinates.length > 0 &&
        polygonCoordinates.map((coordinates, index) => (
          <Polygon
            key={index}
            pathOptions={pathOptions}
            positions={coordinates}
          >
            <Tooltip sticky>
              {animalId !== undefined ? names[animalId] : names[index]}
            </Tooltip>
          </Polygon>
        ))}
      {(canEdit || canDraw) && (
        <FeatureGroup ref={featureGroupRef}>
          <EditControl
            position="topright"
            onCreated={onCreated}
            draw={{
              rectangle: false,
              circle: false,
              polyline: false,
              circlemarker: false,
              marker: false,
              polygon: canDraw,
            }}
            edit={{
              remove: canEdit,
              poly: canEdit ? { color: "#ff0000" } : false,
              edit: canEdit ? { color: "#ff0000" } : false,
            }}
          />
        </FeatureGroup>
      )}
    </MapContainer>
  );
}

export default InteractiveMap;
