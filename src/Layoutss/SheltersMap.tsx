import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons/faLocationCrosshairs';


export const SheltersMap = () => {
  
  const centerCoordinates: LatLngExpression = [36.5000, 10.1658];

  const shelters = [
    {id : 1, name : 'SOS Animaux Tunisie', latitude : 36.51799367041044, langitude : 10.69764855313476, phone : 25328328, adr : 'R27'},
    {id : 2, name : 'EUROFARBE', latitude : 35.72177068000091, langitude : 10.847611675131432, adr : 'Bouhjar, Banblat wal-Manarah'},
    {id : 3, name : 'SOS Animaux', latitude : 37.17990158254912, langitude : 9.839331335176102, phone : 97511134, adr : 'Rue de la Gare, Tinjah'},
    {id : 4, name : 'The Hope Shelter', latitude : 36.910938050597395, langitude : 10.10125014436501, phone : 52136525, adr : 'Sidi Thabet'},
  ]

  return (
    <div className="sheltersmap">
      <MapContainer center={centerCoordinates} zoom={7.5} maxZoom={10} minZoom={6} id='Mapcont'>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {shelters.map(shelter => (
          <Marker key = {shelter.id} position = {[shelter.latitude, shelter.langitude]} >
            <Popup>
              <p>Name : {shelter.name}</p>
              <p><FontAwesomeIcon icon={faLocationCrosshairs} /> Adresse : {shelter.adr}</p>
              {shelter.phone && <p><FontAwesomeIcon icon={faPhone} /> Phone : {shelter.phone}</p>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
