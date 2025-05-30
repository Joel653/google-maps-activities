import React, { useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  MarkerClustererF,
  InfoWindowF
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 23.2494, // Mazatlán
  lng: -106.4111
};

const generateMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i++) {
    markers.push({
      lat: center.lat + Math.random() * 0.1 - 0.05,
      lng: center.lng + Math.random() * 0.1 - 0.05
    });
  }
  return markers;
};

const MapaConClusters = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDFIjfaMNIkHBZIO7XUZRZmzot6rjC1DqA' // Reemplaza con tu API KEY
  });

  const markers = generateMarkers();
  const [selected, setSelected] = useState(null);

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
    >
      <MarkerClustererF>
        {(clusterer) =>
          markers.map((pos, index) => (
            <MarkerF
              key={index}
              position={pos}
              clusterer={clusterer}
              onClick={() => setSelected(pos)}
            />
          ))
        }
      </MarkerClustererF>

      {selected && (
        <InfoWindowF
          position={selected}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <p><strong>Latitud:</strong> {selected.lat.toFixed(4)}</p>
            <p><strong>Longitud:</strong> {selected.lng.toFixed(4)}</p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default MapaConClusters;