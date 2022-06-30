import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const ShowMap = () => 
{

  return (
      <Map
        initialViewState={{
        longitude: 3.3720,
        latitude: 6.5760,
        zoom: 14
      }}
      mapboxAccessToken="pk.eyJ1IjoiZm9sYXJhbm1pamVzdXRvZnVubWkiLCJhIjoiY2wyd2NuN29pMGtqdTNlcW1yMWhscG9nZyJ9.rg6JscEQVRfH8qxoPoJTiw"
      style={{width: '100%', height: '100%'}}
      mapStyle="mapbox://styles/folaranmijesutofunmi/cl50ynmz7002u14pdzg6h41ag"
    >
      <Marker longitude={3.3720} latitude={6.5760} anchor="bottom" >
        <p>📍</p>
      </Marker>
    </Map>
  );
}
 
export default ShowMap;
