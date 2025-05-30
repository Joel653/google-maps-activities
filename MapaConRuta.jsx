import React, { useState } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

// 📍 Coordenadas de la UAS Mazatlán
const origen = { lat: 23.224856, lng: -106.416983 };

// 📍 Coordenadas de la Plazuela Machado
const destino = { lat: 23.202245, lng: -106.422467 };

const MapaConRuta = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDFIjfaMNIkHBZIO7XUZRZmzot6rjC1DqA', // 🔑 Reemplaza con tu API Key de Google Maps
    libraries: ['places'],
  });

  const [directions, setDirections] = useState(null);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Error al obtener direcciones:', response);
      }
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={origen}
      zoom={14}
    >
      {/* Mostrar la ruta */}
      <DirectionsService
        options={{
          destination: destino,
          origin: origen,
          travelMode: 'DRIVING' // 🚗 Puedes cambiar a 'WALKING', 'BICYCLING' o 'TRANSIT'
        }}
        callback={directionsCallback}
      />

      {directions && (
        <DirectionsRenderer
          options={{
            directions: directions
          }}
        />
      )}

      {/* Marcadores en los puntos */}
      <Marker position={origen} label="UAS" />
      <Marker position={destino} label="Machado" />
    </GoogleMap>
  ) : (
    <div>Cargando mapa...</div>
  );
};

export default MapaConRuta;
