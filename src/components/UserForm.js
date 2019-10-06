import React from 'react'

import {getData} from '../js/requests';

const UserForm = ({setFlightData}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = document.getElementById("user-url").value
        getData(url, setFlightData)
    }

    return(
        <form id="user-form" onSubmit={handleSubmit}>
            <label>Flight Aware URL</label>
            <br/>
            <input id="user-url" type="text" defaultValue="https://flightaware.com/live/flight/DAL8889/history/20191005/2331Z/KIAD/KATL"/>
            <br/>
            <input type="submit" value="Render Flight Route" />
        </form>
    )   

}

export default UserForm;