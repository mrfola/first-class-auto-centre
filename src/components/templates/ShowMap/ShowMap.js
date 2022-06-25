
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl"
// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
import "mapbox-gl/dist/mapbox-gl.css"

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = "pk.eyJ1IjoiZm9sYXJhbm1pamVzdXRvZnVubWkiLCJhIjoiY2wyd2NxcHE0MDV5dTNsbno3ZWMxZmJidSJ9.lnia2WE6dICt77XhejO1dQ"

const  ShowMap = ({lng, lat, zoom}) => 
{
    const mapContainer = useRef()

    useEffect(() => 
    {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      })
        
      // cleanup function to remove map on unmount
      return () => map.remove()
    }, [lng, lat, zoom])
  
    return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
  }
 
export default ShowMap;