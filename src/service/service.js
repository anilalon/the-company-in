
const axios = require("axios");

const access_token = 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49';

 function getCompanyBydomain(domain){
    return axios.get(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
        headers: {
          'Authorization': `${access_token}`
        }
      })
      .then((res) => {
        console.log(res.data)
        const company = res.data;
        console.log(company);
        return company;
      })
      .catch((error) => {
        console.error(error)

        return error;
      })
      
}

export default { getCompanyBydomain };