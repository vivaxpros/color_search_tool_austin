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

    let url1 =
        window.location != window.parent.location
            ? document.referrer
            : document.location.href;

    let url2 = document.location.ancestorOrigins[0];

    let url3 =
        document.location.ancestorOrigins[
            document.location.ancestorOrigins.length - 1
        ];

    console.log('url1', url1);
    console.log('url2', url2);
    console.log('url3', url3);

    const currentIframeHref = new URL(document.location.href);
    const urlOrigin = currentIframeHref.origin;
    const urlFilePath = decodeURIComponent(currentIframeHref.pathname);

    console.log('currentIframeHref', currentIframeHref);
    console.log('urlOrigin', urlOrigin);
    console.log('urlFilePath', urlFilePath);

    console.log('baseURI', document.baseURI);

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
                />
            </div>
        </>
    );
}

export default App;
