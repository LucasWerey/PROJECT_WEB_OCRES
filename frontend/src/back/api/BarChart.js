
import axios from "axios";
const url = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&sort=date&facet=date";

// Récupération des données de l'API
export const fetchData = async () => {
  try {
    const {
      data: { value, year},
    } = await axios.get(url);
 
    const modifiedData = { value, year};
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
  
};
export const fetchDailyData = async () => {
   
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.facet_groups[0].facets.map((dailyData,index) => ({
      value: dailyData.count,
      year: dailyData.name,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};