import { useMemo } from "react";
import { GoogleMap,useLoadScript,Marker } from "@react-google-maps/api"


export default function Map() {
    const center = useMemo(() => ({ lat: -38.09861360483186, lng: 145.28592795546697 }), []);
const {isLoaded} =useLoadScript({
    googleMapsApiKey:'AIzaSyDowMK1BO0d-GPP97fhb4kChqXnRhdjmoY'
})


  return (<>

{isLoaded ?     <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap> 
: <div>loading..</div>}

</>
  )
}

