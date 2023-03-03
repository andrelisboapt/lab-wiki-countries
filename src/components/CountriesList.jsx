import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



function CountriesList({countries}) {
    /* const [countries, setCountries] = useState([]) */
    
/* 
const getCountries = async() =>{
  try {
    let response = await axios.get(apiURL)

    setCountries(response.data)

  } catch (error) {
    console.log(error)
  }
}

useEffect(() =>{
  getCountries()
}, [])
 */
  return (
    <div>
<h3>List of Countries</h3>

{countries.map((item)=>{
    return(
        <div>
        <Link to={`country/${item.alpha3Code}`}>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`} />
        <p>{item.name.common}</p>
        </Link>

        </div>
    )
})}
    </div>
  )
}

export default CountriesList