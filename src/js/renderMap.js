
import { cesiumToken } from "../keys";

const renderMap = (Cesium, flightData) => {


    document.getElementById("cesiumContainer").innerHTML = ""

    // Cesium.Ion.defaultAccessToken = cesiumToken;
    // debugger
    const viewer = new Cesium.Viewer("cesiumContainer")

    let point;

    if (flightData) {
        for (let reading of flightData) {
            point = viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(reading.longitude, reading.latitude, reading.feet),
                ellipsoid: {
                    radii: new Cesium.Cartesian3(1000, 1000, 1000),
                    material: Cesium.Color.RED.withAlpha(0.5)
                }
            })
        }
    }

    
    let start = Cesium.Cartesian3.fromDegrees(flightData[0].longitude, flightData[0].latitude, 10*10**4)
    
    const nextPoint = (curIndex) => {
        const next = Cesium.Cartesian3.fromDegrees(
            flightData[curIndex + 10].longitude, 
            flightData[curIndex + 10].latitude, 
            10*10**4
        )
        
        // viewer.camera.flyTo({
        //     destination: next,

        // })

        return next
    }

    viewer.camera.flyTo({
        destination: start,
    })

}

export default renderMap;