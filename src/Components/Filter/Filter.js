/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react' 
import {RoomsContext} from "../Context"
import { Title } from "../Title/Title";
import {useContext} from "react"
import "./Filter.scss"


// function for getting the list of values for the input elements
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export const Filter = ({rooms}) => {
    let context = useContext(RoomsContext)
    let {handleChange, minPrice, maxPrice, capacity, type, minSize, maxSize, price} = context
            
    //Get the types from the rooms object
    let types = getUnique(rooms, "type")
    types=["all", ...types]
    types = types.map((type, index)=>{
        return(
            <option key={index}>
                {type}
            </option>
        )
    })


    //Get persons from the rooms object
    let persons = getUnique(rooms, "capacity")
    persons = persons.map((person, index)=>{
        return(
        <option key={index}>
            {person}
        </option>)
    })

            return(
                <section className="filter-container"> 
                    <Title title="search rooms"/>
                    
                    <form className="filter-form">
                        <div className="form-group">
                            <label htmlFor="type">Room Types</label>
                            <select name="type" id="type" className="form-control" onChange={handleChange} value={type}>
                                {types}
                            </select>
                        </div>
                            
                        <div className="form-group">
                            <label htmlFor="capacity">guest</label>
                            <select name="capacity" id="capacity" className="form-control" onChange={handleChange} defaultValue={capacity}>
                                {persons}
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="price">Room price #600</label>
                            <span>{price}<input type="range" min={minPrice} max={maxPrice} value={price} className="form-control" name="price"  id="price" onChange={handleChange} style={{background:"blue", borderRadius:"50px", width:"100%", fontSize:"1rem"}}/></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Room Sizes</label>
                            <div className="size-inputs">
                                <input type="number" name="minSize" value={minSize} className="size-input" onChange={handleChange}></input>
                                <input type="number" name="maxSize" value={maxSize} className="size-input" onChange={handleChange}></input>
                            </div>
                            
                        </div>
                     </form>
                </section>
            )
       
    
}
