import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const companyItem = (props) => {
return(
    <div>
        <li>
        <NavLink        to={{pathname:`/company`, state: {details: {props}}}}
                         exact
                        activeClassName="active">
                    
             <b>  Logo: </b>  <img src={props.companyData.logo}></img>
            <a> <b>Name:</b> {props.companyData.name + " "} <b> Type:</b> {props.companyData.type}</a>     
    </NavLink>
           
        </li>
    </div>
)
}

export default companyItem;
