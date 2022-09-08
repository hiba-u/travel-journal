import React from "react"

export default function Card(props){
    
    return(
        <div id="card-container">
            <img id="location-img" src={props.imageUrl} alt={props.title}/>
            <div id="description">
                <div id="nav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" fill="#F55A5A" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <h5 id="country">{props.location}</h5>
                    <a id="g-map" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 id="title">{props.title}</h2>
                <h4 id="date">{`${props.startDate} - ${props.endDate}`}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}