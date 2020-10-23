import React, { Component } from 'react'
import Data from "../data"

export const RoomsContext = React.createContext()
export class RoomsContextProvider extends Component {
    state ={
        rooms:[],
        featuredRooms:[],
        sortedRooms: [],
        loaded:true,

        
    }
    componentDidMount(){
        let rooms = this.formatData(Data)
        //let sortedRooms = this.sortedRooms()
        let featuredRooms = rooms.filter(room => room.featured === true)
       this.setState({
            rooms,
            featuredRooms,
            sortedRooms:[],
            loaded : false
       })
    }

    // function to get data from database
    formatData(items){
    let itemTemplate = items.map((item)=>{
        let id = item.sys.id
        let images = item.fields.images.map((image)=>{
            return image.fields.file.url
        })
        // Put all data into an array 
        let room = {...item.fields, images, id}
        return room
    })
    return itemTemplate
    }

    // function to sort things from the rooms data
    sortedRooms(){

    }
    render() {
        return (
            <RoomsContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomsContext.Provider>
        )
    }
}
