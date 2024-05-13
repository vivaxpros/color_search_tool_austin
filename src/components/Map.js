import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import '../style.css';
import { VivaxIcon, HouseIconRed } from './Icons';
import Pins from './Pins';

const START_POSITION = {
    austin: [30.32846969080846, -97.7385087],
    dallas: [32.979167, -96.968891],
};

const START_ZOOM = {
    austin: 13,
    dallas: 11,
};

function Map({ displayPins, map, setMap, currLocPin, startPosition }) {
    let currLat = currLocPin.lat ? parseFloat(currLocPin.lat) : 0;
    let currLon = currLocPin.lon ? parseFloat(currLocPin.lon) : 0;

    return (
        <>
            <MapContainer
                center={START_POSITION[startPosition]}
                zoom={START_ZOOM[startPosition]}
                // make minZoom smaller to allow greater 'zoom-out'
                minZoom={11}
                scrollWheelZoom={true}
                ref={setMap}
                className="map_container"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[30.32846969080846, -97.7385087]}
                    icon={VivaxIcon}
                >
                    <Popup>
                        Vivax Pros <br /> 1704 Houston St., Austin, TX 78756
                    </Popup>
                </Marker>
                <Marker
                    position={[currLat, currLon]}
                    icon={HouseIconRed}
                    key={currLocPin}
                >
                    <Popup>Your Location</Popup>
                </Marker>
                {map ? <Pins map={map} displayPins={displayPins} /> : null}
            </MapContainer>
        </>
    );
}

export default Map;
