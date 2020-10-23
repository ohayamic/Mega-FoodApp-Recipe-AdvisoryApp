import React from 'react'
import {RoomsContext} from "../Context"
import "./Filter.scss"
const RoomsContextConsumer = RoomsContext.Consumer
export const Filter = () => {
    return (

        <RoomsContextConsumer >{()=>{
            
            return(
                <div className="filter-container"> From the Filter</div>
            )
        }}
            
        </RoomsContextConsumer>
    )
}
