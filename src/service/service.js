
const axios = require("axios");

const access_token = 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49';

 function getCompanyBydomain(domain){
    return axios.get(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
        headers: {
          'Authorization': `${access_token}`
        }
      })
      .then((res) => {
        const company = res.data;
        return company;
      })
    
}

export default { getCompanyBydomain };