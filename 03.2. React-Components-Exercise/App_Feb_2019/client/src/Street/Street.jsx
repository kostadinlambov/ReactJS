import React, { Component } from 'react';
import './Street.css';

const Street = (props) => (
    <div className="streets" onMouseEnter={()=> props.streetHoverEvent(props.id)}>
        <p className="street-info">{props.location}</p>
    </div>
)

export default Street;