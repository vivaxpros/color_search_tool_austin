import Map from './components/Map';
import SideBar from './components/SideBar';
import Header from './components/Header';
import ContactDrop from './components/ContactDrop';
import pins from './data/2022_austin_color_data.json';
import filter_pins from './helpers/filter_pins';
import { useState } from 'react';
import './style.css';

function App() {
    const [displayPins, updateDisplayPins] = useState(pins);
    const [map, setMap] = useState(null);
    const [currLocPin, updateCurrLocPin] = useState('');

    const searchParams = new URL(document.location).searchParams;
    const startPosition = searchParams.get('start') ?? 'austin';

    function applyFilters() {
        let color = document.getElementById('colorInput').value;
        let substrate = document.getElementById('substrateInput').value;
        let complete = document.getElementById('compl_year').value;
        updateDisplayPins(filter_pins(pins, color, substrate, complete));
    }
    return (
        <>
            <Header />
            <div className="page_outline">
                <SideBar
                    applyFilters={applyFilters}
                    map={map}
                    updateCurrLocPin={updateCurrLocPin}
                />
                <Map
                    displayPins={displayPins}
                    map={map}
                    setMap={setMap}
                    currLocPin={currLocPin}
                    startPosition={startPosition}
                />
            </div>
        </>
    );
}

export default App;
