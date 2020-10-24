import React, { Component } from 'react'
import {Banner} from "../Banner/Banner"
import {Link} from "react-router-dom"
import {RoomsContext} from "../Context"
import styled from 'styled-components'
import "./DetailedRoom.scss"

export default class DetailedRoom extends Component {
    static contextType = RoomsContext
    
    render() {
        let {rooms} = this.context
        let roomdetails = this.props.match.params.roomdetails // get the slug from the URL
        let getRoomDetails = rooms.filter(room=>room.slug===roomdetails) // get the single room from the bunch        
        let image = getRoomDetails.map((item)=>{ //get the first image from the images array
            let img = item.images[0]
            return img
        })
        
        // using styled component to dynamically change the Hero image
        const Div = styled.header`
                    min-height: calc(70vh - 66px);
                    background: url(${image}) center/cover no-repeat;
                    display: flex;
                    align-items: center;
                    justify-content: center;

`       // check if rooms is empty or getRoomDetails is empty 
    
        //console.log(getRoomDetails)
        const displayDetails = getRoomDetails.map((item)=>{
            return(
            <section className="single-room" key={item.id}>
                <div className="single-room-images" > 
                    {item.images.map((img, index) => {
                    return<img src={img} alt="img" key={index}/>})    } 
                </div>
                <section className="single-room-info">
                    <div className="desc">
                        <h3> Details</h3>
                        <p>{item.description}</p>
                    </div>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price : ${item.price}</h6>
                        <h6>size : {item.size} square foot</h6>
                        {item.capacity<2? <h6>max Capacity : {item.capacity} person</h6>:<h6>max Capacity : {item.capacity} people</h6>}
                        {item.pet?<h6>pet allowed</h6>:<h6>pet not allowed</h6>}
                        {item.breakfast?<h6>free breakfast included</h6>:<h6>free breakfast excluded</h6>}       
                    </article>
                    
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {item.extras.map((extra, index)=>{
                            return<p key={index}> - {extra}</p>
                        })}
                    </ul>

                </section>
            </section>
            )
        })

        return (
            <>
            <Div>
                <Banner title={roomdetails} > 
                <Link to ="/rooms"  className="btn-primary">Back to Rooms</Link>
                </Banner>
            </Div>
                {/** add the hero page with the first image */}
                {displayDetails}
            </>
        )
    }
}
