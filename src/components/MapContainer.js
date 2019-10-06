import React, { useEffect } from 'react';

import renderMap from '../js/renderMap';

const MapContainer = ({ flightData }) => {

    const Cesium = window.Cesium;

    useEffect(() => {
        if (flightData){
            renderMap(Cesium, flightData)
        }
    })

    return (
        <div id="map-container">
            <div id="cesiumContainer"></div>
        </div>
    )

}

export default MapContainer;