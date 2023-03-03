import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {
const [countries, setCountries] = useState([])

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


  return <div className="App">
<Header/>
<CountriesList countries={countries}/>

<Routes>
  <Route path="/country/:id" element={<CountryDetails countries={countries}/>} />
</Routes>




  </div>;
}
export default App;
