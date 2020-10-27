import React, { Component } from 'react'
import Data from "../data"

export const RoomsContext = React.createContext()
export class RoomsContextProvider extends Component {
    state ={
        rooms:[],
        featuredRooms:[],
        sortedRooms: [],
        loaded:true,
        maxSize: 1000 ,
        minSize: 0,
        minPrice: 0,
        maxPrice: 600,
        capacity: 1,
        price: 600,
        pets: true,
        type:"all",
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
        let getTarget = e.target
        let name = getTarget.name
        let value = getTarget.value
        console.log(typeof(e.target.value))
        this.setState({
            [name] : value
        }, this.filterItem)
    
    }
    filterItem =()=>{
        let {rooms, type, capacity, price, minSize, maxSize} = this.state
        let tempRooms = [...rooms]
        let gettype = type
        let capacities = parseInt(capacity)
        let prices = parseInt(price)
        if(type !=="all"){
            tempRooms = tempRooms.filter(room => room.type === gettype)
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacities )
        }
        
        if(prices <= 600){
            tempRooms = tempRooms.filter(room=>room.price <= prices)
        }
        tempRooms = tempRooms.filter(room=>room.size >=minSize && room.size <=maxSize)
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render() {
        return (
            <RoomsContext.Provider value={{...this.state, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomsContext.Provider>
        )
    }
}
