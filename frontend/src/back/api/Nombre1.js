import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Contenu from "../../components/widgets/number1";



// Récupération des données de l'API
export default function AxiosRequest() {

    const[data, setData] = useState([])
    const url = "https://ressources.data.sncf.com/api/records/1.0/search/?q=&sort=date&facet=date&dataset=objets-trouves-restitution"
    const config = {
      auth: {
        username: "567c7e20-6906-44eb-98e6-2f2911c98a30",
        password: "",
      },
    };

    const getData = () => {
        axios
        .get(url)
        .then((response) => setData(response.data.facet_groups))
        .catch((error) => console.log(error));
};

useEffect(() => {
    getData();
}, []);


return (
    <>

 {data.map((todo,index)=> (
    <Contenu key={index} todo={todo}/>
))} 


</>
)
}