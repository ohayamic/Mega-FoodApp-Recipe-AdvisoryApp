import React from 'react'
import {Link} from "react-router-dom"
import "./Rooms.scss"

export const SingleRoom = ({room}) => {
    //console.log(room)
    if(!room){
        return(
        <div className="error">
            <h3>no such could be found ....</h3>
            <Link to="/rooms" className="btn-primary">back to rooms</Link>
        </div>)
    }
    return (
        <div className="room" >
            <div className="img-container">
                <img src={room.images[0]}  alt="featured"/>
                <div className="price-top">
                    <h6>#{room.price}</h6>
                    <p>per night</p>
                </div>
                <Link  to ={`/${room.slug}`} > <button className="btn-primary room-link">Preview</button></Link>
            </div>
            <div className="room-info">{room.name} </div>
        </div>
    )
}
