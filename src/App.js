
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCloudDrizzle} from 'react-icons/bs';

function App() {
  const[datas,setDatas]= useState({});
  const [location,setLocation] = useState('');
  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2074ddacf02e5e5ce1cd8d823c9c03f3`;

  const handleSubmit = e=>
  {
    e.preventDefault();

    axios.get(url).then(response=>
    {
      return response.data;
    }).then(data=>{
      setDatas(data)
      console.log(datas)
    })  .catch(error => {
      console.log(error.response.data.error)
   })
   setLocation('')
    
  }
  return (
    <div className='container'>
    <header>
      <h2> <BsCloudDrizzle /> Weather App</h2>
    </header>

    <div className='forms'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='search' value={location}  onChange={e=>setLocation(e.target.value)} placeholder='Enter Location' required />
        <button type='submit'><AiOutlineSearch /></button>
      </form>
    </div>
  <div className='temp-container'>
    <div className='location'>
      {datas.name}
    </div>
    <div className='temp'>
     {datas.main ? <p>{datas.main.temp}&deg;F</p> :null}
    </div>
    <div className='descriptiion'>
      {datas.weather?<p>{datas.weather[0].main}</p>:null}
    </div>


    <div className='more'>
      <div className='humidity'>

        {datas.main ? <p> humidity   {datas.main.humidity}%</p> :null}
      </div>

      <div className='wind-speed'>
        {datas.wind ? <p>Wind Speed   {datas.wind.speed}MPH</p> :null}
      </div>

    </div>
    </div>
    </div>
  );
}

export default App;
