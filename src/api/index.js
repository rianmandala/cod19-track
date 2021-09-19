import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fecthData = async (country)=>{

    let dynamicUrl = url
    if(country) dynamicUrl = `${url}/countries/${country}`

    try{
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(dynamicUrl)

        return {confirmed, recovered, deaths, lastUpdate}
    }catch(error){
        console.log(error)
    }
}

export const fecthDailyData = async ()=>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        
        const modifiedData = data.map(({confirmed, deaths, reportDate})=>({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date: reportDate
        }))

        return modifiedData

    }catch(error){
        console.log(error)
    }
}

export const fetchCountries = async ()=>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`)
        const modifiedData = countries.map(country => country.name)
        return modifiedData
    }catch(error){
        console.log(error)
    }

}