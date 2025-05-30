import { GoogleMap, LoadScript, DrawingManager } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 20.6736,
  lng: -103.344
};

const MapContainer = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const onLoad = () => {
    setMapLoaded(true);
  };

  const handlePolygonComplete = (polygon) => {
    const path = polygon.getPath().getArray().map(coord => ({
      lat: coord.lat(),
      lng: coord.lng()
    }));
    console.log('Polígono:', path);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDFIjfaMNIkHBZIO7XUZRZmzot6rjC1DqA"
      libraries={['drawing']}
      onLoad={onLoad}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {mapLoaded && (
          <DrawingManager
            options={{
              drawingControl: true,
              drawingControlOptions: {
                position: window.google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['polygon', 'rectangle', 'polyline']
              }
            }}
            onPolygonComplete={handlePolygonComplete}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

