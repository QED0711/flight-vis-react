import $ from 'jquery'

const getData = (url, setFlightData) => {

    const settings = {
        async: true,
        crossDomain: true,
        url: "https://flight-vis.herokuapp.com/",
        // url: "http://127.0.0.1:5000/",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
        },
        method: "POST",
        "processData": false,
        data: JSON.stringify({ url: url })
    }
    if (process.env.NODE_ENV === "development") {
        settings.url = "http://127.0.0.1:5000"
    }
    // if(process.env)

    $.ajax(settings).done((response) => {
        const json = JSON.parse(response)
        // console.log(json)
        setFlightData(json)
    })

}

export {
    getData
}