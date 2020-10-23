import React, { Component } from 'react'
import {RoomsContext} from "../Context"
import "./DetailedRoom.scss"

export default class DetailedRoom extends Component {
    static contextType = RoomsContext
    
    render() {
        let {featuredRooms} = this.context
        let roomdetails = this.props.match.params.roomdetails
        let getRoomDetails = featuredRooms.filter(featuredRoom=>featuredRoom.name===roomdetails)
        console.log(getRoomDetails)
        const displayDetails = getRoomDetails.map((item)=>{
            return(
                <div className="single-room" key={item.id}>
                <div className="single-room-images" > 
                    {item.images.map((img, index) => {
                    return<img src={img} alt="img" key={index}/>})    } 
                </div>
                <div className="single-room-info">
                    <div className="desc">
                        <h3> Details</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className="info">
                        <h3>Info</h3>
                        <h6>price : ${item.price}</h6>
                        <h6>size : {item.size} square foot</h6>
                        <h6>max Capacity : {item.capacity} people</h6>
                        {item.pet?<h6>pet allowed</h6>:<h6>pet not allowed</h6>}
                        {item.breakfast?<h6>free breakfast included</h6>:<h6>free breakfast excluded</h6>}       
                    </div>
                    
                </div>
                <div className="room-extras">
                    <h6>Extras</h6>
                    <div className="extras">
                        {item.extras.map((extra, index)=>{
                            return<p key={index}> - {extra}</p>
                        })}
                    </div>

                    </div>
                </div>
            )
        })
        return (
            <>
                {/** add the hero page with the first image */}
                {displayDetails}
            </>
        )
    }
}
