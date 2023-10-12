import { getCountryByCountryId } from "../services/api/api.service";
export const getCountryName = (country_id) => {
    let country_name = null
    // getCountryByCountryId(country_id)
    // .then((e)=>{
    //     country_name = e.data.data[0].country_name
    // })
    // .catch((e)=>console.log('Country Show Error'))
    return country_name
}