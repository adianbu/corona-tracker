import axios from 'axios';

// const Api = 'https://api.covid19api.com/summary';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{

  let newUrl = url;

  if(country){
    newUrl = url+'/countries/'+ country;
  }
    try {
    const {data:{confirmed, recovered, deaths,lastUpdate}} = await axios.get(newUrl);
    // const {confirmed, recovered, deaths,lastUpdate} = data;
    return {confirmed, recovered, deaths,lastUpdate};  
    
} catch(error){
   console.log(error);
}
}

export const fetchDailyData = async () =>{
try {
    const {data} = await axios.get(url+'/daily');
    // console.log(data);
    const modifiedData = data.map( dailyData => ({
     confirmed:dailyData.confirmed.total,
     deaths:dailyData.deaths.total,
     date:dailyData.reportDate
    }))
    return modifiedData;
    
} catch (error) {
    console.log(error);
 }
}

export const countryNames = async () =>{
  try {
      const {data:{countries}} = await axios.get(url+'/countries');
      return countries.map( country => country.name);
      // console.log(data);
  } catch (error) {
    console.log(error);
  }
}