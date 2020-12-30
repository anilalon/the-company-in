import React, { Component } from 'react';
import "./companies.css";
import Service from '../service/service';
import CompanyItem from "./companyItem";

class Companies extends Component{

    state = {
        companies: [],
          newDomain: ""
    }

    addDomain = () => {

       let updatedCompanies = this.state.companies;
       Service.getCompanyBydomain(this.state.newDomain)
       .then((newCompany) => { 
        updatedCompanies.push(newCompany);
        this.setState({companies: updatedCompanies})
       });
      
    }

    render(){
        return (
          <div>
          <h2>EquityBee</h2>
            <h1>Companies</h1>
            
            <div className="newCompany">
              <h2>Add new company</h2>
              <p><b>Domain: </b>
              <input type="text" size="30" value={this.state.newDomain} onChange={e => this.setState({newDomain: e.target.value})}></input>
              </p>
              <input type="submit" value="Add" onClick={this.addDomain}></input>
              </div> 

                <div className="allCompanies">
                    <ul>
                    {this.state.companies.map((company, i) =>                
                           <CompanyItem key={i} 
                           companyData={company}
                            ></CompanyItem>  
                                )}
                    </ul>
                </div>
              

            </div>)
    }
}

export default Companies;