import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
export default function Welcome() {
  const [city,setCity]=useState('');
  const[temp,setTemp]=useState('');
  const[weather,setWeather]=useState('');
  const[string,setString]=useState(false);
  const[text, setText] = useState(''); // Text to be typed
  const sentences = ["Hello, Friend !!!", "Wanna to know Your city's Temperature ??","Please try it...."];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      const currentSentence = sentences[currentSentenceIndex];
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < currentSentence.length) {
          setText(currentSentence.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval); // Stop the interval when sentence is complete
          setTimeout(() => {
            // Delay before clearing text and moving to the next sentence
            setText('');
            setCurrentSentenceIndex(currentSentenceIndex + 1);
          }, 1000);
        }
      }, 100); // Adjust the speed of typing here
    }
  },[currentSentenceIndex]);
 setTimeout(() => {
    window.location.reload();
 }, 15000);

 const handleWeather=async(city)=>{
  let api_key="82e95525bff4ce264ce84a37bf6d6646";
  let temp= await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`)
   .then(res=>res.json());
   console.log(temp);
  setTemp(temp.main.temp);
   setCity(temp.name);
   setWeather(temp.weather[0].main);
setString(true);
 }
 const handleChange=(e)=>{
        setCity(e.target.value);
    }
  return (
    <div style={{fontFamily:"cursive"}}>
       <div style={{height:"20px"}}><p style={{fontFamily:'cursive',fontSize:'30px'}}>{text}</p></div>
      <div className="card text-center" style={{marginTop:"70px", width:"500px", border:"none"}}>
  <div className="card-header" style={{"backgroundColor":"lightblue"}}>
    Weather-Forecast
  </div>
  <div className="card-body" style={{"backgroundColor":"cyan"}}>
    <h5 className="card-title" >Wanna to know Your City's Temperature ??</h5>
    <input type="text"name='city' id='city' placeholder='Enter City' value={city} onChange={handleChange}/><br></br><br></br>
    <button className='btn btn-outline-primary'onClick={()=>{handleWeather(city)}}>Search</button>
  </div>
  <div className="card-footer" style={{fontSize:"20px","backgroundColor":"lightblue"}}>
   <b> Today's Weather<br></br>
    {
      string ?`Temperature of ${city} is ${temp}°C and weather is ${weather}`:" "
    }</b>
  </div>
</div>

      </div>
  )
}
