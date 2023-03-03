import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'



function CountryDetails({countries}) {
  const {id} = useParams()
  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id
})



  return (
    <div>
       <h1>{foundCountry.name.common}</h1>
       <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
       <p>Capital: {foundCountry.capital}</p>
       <p>Area: {foundCountry.area} km2</p>
        {foundCountry.borders.map((item)=> <Link to={`/country/${item}`}>{item} <br></br></Link>)}
       
    </div>
  )
}

export default CountryDetails