import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Marcadores = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };
  const center = { lat: 19.4326, lng: -99.1332 }; // Ejemplo: CDMX

  return (
    <div>
      <h2>Marcadores en Google Maps</h2>
      <p>
        <strong>Propósito:</strong> Mostrar ubicaciones clave con marcadores.
        <br />
        <strong>Librerías:</strong> @react-google-maps/api.
      </p>
      
      <LoadScript googleMapsApiKey="AIzaSyDFIjfaMNIkHBZIO7XUZRZmzot6rjC1DqA">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

<div className="explicacion">
  <h3>¿Qué aprendí?</h3>
  <ul>
    <li>Cómo integrar Google Maps en React.</li>
    <li>Uso de hooks para manejar el estado del mapa.</li>
  </ul>
  <h3>Desafíos</h3>
  <p>Configurar correctamente la API Key y los límites de uso.</p>
</div>

export default Marcadores;