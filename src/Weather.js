import React from "react";
import "./Weather.css";

export default function Weather () {
    return (<div className="Weather">
<form>
    <input type="search" plaseholder="Enter a city..." autoFocus="on" autoComplete="off" />
    <input type="submit" value="Search"/>
</form>    
<h1>Saturday</h1>
<div>Last updated: 16:48</div>
<h2>London</h2>
<div className="row">
    <div className="col-6">
       <div>24 °C | °F</div> 
    </div>
    <div className="col-6">
        <img src="https://bucolic-biscochitos-41ed06.netlify.app/images/icon/01d.svg" alt="Weather icon"/>
    </div>
    <ul>
        <li>
            Clear sky
        </li>
        <li>
            Humidity: 32%
        </li>
        <li>
            Wind: 2 metre/sec
        </li>
    </ul>
</div>
    </div>);
}