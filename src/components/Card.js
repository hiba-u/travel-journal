import React from "react"

export default function Card(props){
    
    return(
        <div>
            <img src={props.imageUrl} alt={props.title}/>
            <div id="description">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <h5>{props.location}</h5>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h4>{`${props.startDate} - ${props.endDate}`}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}