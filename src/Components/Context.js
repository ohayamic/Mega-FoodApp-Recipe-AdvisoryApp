import React, { Component } from 'react'
import Data from "../data"

export const RoomsContext = React.createContext()
export class RoomsContextProvider extends Component {
    state ={
        rooms:[],
        featuredRooms:[],
        sortedRooms: [],
        loaded:true,
        handleChange : null,
        maxSize: 0 ,
        minSize: 1000,
        minPrice: 0,
        maxPrice: 600,
        capacity:10,
        pets: true,
        type:"",
        breakfast: true


        
    }
    
    componentDidMount(){
        let rooms = this.formatData(Data)
        //let sortedRooms = this.sortedRooms()
        let featuredRooms = rooms.filter(room => room.featured === true)
       this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loaded : false,
            handleChange : this.handleChange,
            maxSize: 0 ,
            minSize: 1000,
            minPrice: 0,
            maxPrice: 600,
            capacity:10,
            pets: true,
            type:"",
            breakfast: true
       })
    }

    // function to get data from database
    formatData(items){
    let itemTemplate = items.map((item)=>{
        let id = item.sys.id
        let images = item.fields.images.map(image=>image.fields.file.url)
        // Put all data into an array 
        let room = {...item.fields, images, id}
        return room
    })
    return itemTemplate
    }

    handleChange=(e)=>{
        e.preventDefault()
        console.log("name")
    }
    render() {
        return (
            <RoomsContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomsContext.Provider>
        )
    }
}
