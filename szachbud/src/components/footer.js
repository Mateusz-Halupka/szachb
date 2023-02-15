import * as React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Footer = ({siteTitle}) => {
    return (
        <footer style={{backgroundColor: 'black',
        paddingTop: '4em',
        //paddingBottom: '4em',
        paddingRight: '2em',
        paddingLeft: '2em',}}>
            <div style={{width: '54rem',
        margin: '0 auto'}}>
            <div class='adress' style={{paddingBottom: '20px'}}>
                <h2 style={{color: '#FFFFFF'}}>GDZIE JESTEŚMY</h2>
                <par style={{color: '#FFFFFF'}}>Stawowa 16</par>
                <br></br>
                <par style={{color: '#FFFFFF'}}>55-114 Wisznia Mała</par>
            </div>
            <div>
            <MapContainer style={{ height: '200px', width: '300px'}} center={[51.24603, 17.04149]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.24603, 17.04149]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
            </div>
            </div>
            
        </footer>
    )

}

export default Footer