import React, { Component } from 'react';
import './House.css'

const House = (props) => {
    console.log(props)
    debugger
    return (
        <div className="House" onMouseEnter={() => props.houseHoverEvent(props.id)}>
            <img src={props.imageUrl} alt="House" />
        </div>
    )

}



export default House;

