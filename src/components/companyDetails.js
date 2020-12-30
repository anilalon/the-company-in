import React, { Component } from 'react';

const companyDetails = (props) => {
    
    const companyDetails = props.location.state.details.props.companyData;
    console.log(companyDetails);

    return(
         <div>
            <h2>Company Details</h2> <br/>
            <img src={companyDetails.logo}></img><br/>
            <a> <b>Name:</b> {companyDetails.name} </a>  <br/>
            <a> <b>Domain:</b> {companyDetails.domain } </a>  <br/>
            <a> <b>Description :</b> {companyDetails.description} </a>  <br/>
            <a> <b>Industry:</b> {companyDetails.industry} </a>  <br/>
            <a> <b>Employess:</b> {companyDetails.metrics.employess} </a>  <br/>
            <a> <b>Annual Revenue:</b> {companyDetails.metrics.annualRevenue } </a>  

        </div>
    )
}

export default companyDetails;
