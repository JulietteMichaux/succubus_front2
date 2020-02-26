import React from 'react';
import './Contact.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

function ContactMap() {

  const position = {
    "Paris": { "lat": 48.852969, "lon": 2.349903 },
    "Brest": { "lat": 48.383, "lon": -4.500 },
    "Quimper": { "lat": 48.000, "lon": -4.100 },
    "Bayonne": { "lat": 43.500, "lon": -1.467 },
    "Nantes" : { "lat": 47.218371, "lon": -1.553621},
    "Succubus": { "lat": 47.219487, "lon": -1.55410}
  };

  return (
    <div className='divmap'>
        <Map center={position.Succubus} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position.Succubus}>
            <Popup>Coucou c'est nous!<br />Venez nous rendre visite.</Popup>
          </Marker>
        </Map>
    </div>
  );
}
  
export default ContactMap;
