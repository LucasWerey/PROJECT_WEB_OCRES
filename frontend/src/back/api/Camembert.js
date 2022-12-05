
import axios from "axios";
const url = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&sort=date&facet=gc_obo_type_c&exclude.gc_obo_type_c=V%C3%A9los%2C+trottinettes%2C+accessoires+2+roues&exclude.gc_obo_type_c=Articles+de+sport%2C+loisirs%2C+camping&exclude.gc_obo_type_c=Articles+d%27enfants%2C+de+pu%C3%A9riculture&exclude.gc_obo_type_c=Parapluies&exclude.gc_obo_type_c=Articles+m%C3%A9dicaux&exclude.gc_obo_type_c=Bijoux%2C+montres&exclude.gc_obo_type_c=Instruments+de+musique&exclude.gc_obo_type_c=Divers";

export const fetchData = async () => {
  try {
    const {
      data: { effectif, date},
    } = await axios.get(url);
 
    const modifiedData = { effectif, date};
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
  
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.facet_groups[0].facets.map((dailyData, index) => ({
      value: dailyData.count,
      year: dailyData.name,
    }));

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};