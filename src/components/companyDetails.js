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
            {(companyDetails.industry)  ?  <a> <b>Industry:</b> {companyDetails.industry}   <br/></a> : null}
            {(companyDetails.metrics.employess ) ?   <a> <b>Employess:</b> {companyDetails.metrics.employess}  <br/> </a> : null }
            {(companyDetails.metrics.annualRevenue) ?    <a> <b>Annual Revenue:</b> {companyDetails.metrics.annualRevenue }   <br/></a> : null }  

        </div>
    )
}

export default companyDetails;
