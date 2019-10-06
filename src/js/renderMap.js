
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

    viewer.zoomTo(point);

}

export default renderMap;