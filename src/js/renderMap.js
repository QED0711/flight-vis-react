
import { cesiumToken } from "../keys";
import { endianness } from "os";
import { METHODS } from "http";

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
    
    let start = Cesium.Cartesian3.fromDegrees(
        flightData[0].longitude, 
        flightData[0].latitude, 
        10*10**4
    )
    let end = Cesium.Cartesian3.fromDegrees(
        flightData[flightData.length-1].longitude, 
        flightData[flightData.length-1].latitude, 
        10*10**4
    )
    let middle = Cesium.Cartesian3.fromDegrees(
        flightData[Math.floor(flightData.length-1 / 2)].longitude, 
        flightData[Math.floor(flightData.length-1 / 2)].latitude, 
        10*10**5
    )
    

    

    viewer.camera.flyTo({
        destination: start,
        complete: () => {
            viewer.camera.flyTo({
                destination:end,
                complete: () => {
                    viewer.camera.flyTo({
                        destination: middle,
                    })
                }
            })
        }
    })

}

export default renderMap;