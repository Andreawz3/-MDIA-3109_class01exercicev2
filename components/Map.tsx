import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

// Components
import ExpoLine from './ExpoLine';
import MillenniumLine from './MillenniumLine';

const Map = () => {
  return (
    <MapContainer
      style={{height: "88.5vh"}}
      center={[49.24966, -123.00934]} zoom={12} scrollWheelZoom={true}
    >
      <TileLayer 
        attribution='&copy; <a href="https://github.com/Andreawz3/-MDIA-3109_class01exercicev2.git">By Andrea Wu</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MillenniumLine />
      <ExpoLine />
    </MapContainer>
  )
}

export default Map;