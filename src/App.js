import Header from "./components/Header";

import './global.css'
import Poster from './assets/Night_Galaxy.jpg'
import Video from './assets/video-1.mp4'
import React, { useState } from "react";
function App() {


  const [name, setName] = useState(" ");
 
  const [moles, setmoles]=useState(0);
  const [result,setresult]=useState(null);
  const[temperature,settemperature]=useState(null);
  const [time,settime]=useState(null);
  const [pressure,setpressure]=useState(null);
  const [result2,setresult2]=useState(null);
  const [presin,setpresin]=useState(null);
  const [presout,setpresout]=useState(null);
  const [svol,setsvol]=useState(null);
  const [dsvol,setdsvol]=useState(null);
  const [rotsp,setrotsp]=useState(null);
  const [result3,setresult3]=useState(null);
  const [result4,setresult4]=useState(null);
  const useForward = event =>{
    settemperature(event.target.value);
  }
 
  const useOnce = event =>{
    setmoles(event.target.value);
  }
  const useDf = () =>{
    let throughput = moles*8.314*temperature/time;
    let pumping_speed = throughput/pressure;
    setresult(throughput);
    // console.log({result, result2, pressure});
    setresult2(pumping_speed);
  }
  
  const useTime = event =>{
    settime(event.target.value);
  }
  const usepressure = event =>{
    setpressure(event.target.value);
  }
  const usepresin = event =>{
    setpresin(event.target.value);
  }
  const usepresout = event =>{
    setpresout(event.target.value);
  }
  const usesvol = event =>{
    setsvol(event.target.value);
  }

  const usedsvol = event =>{
    setdsvol(event.target.value);
  }
  const userotsp = event =>{
    setrotsp(event.target.value);
  }
  const usecalc =() =>{
    let throughput =rotsp*((svol*presin)-(dsvol*presout));
    let pumping_speed= throughput/presin;
    setresult3(throughput);
    setresult4(pumping_speed);
    }
  const logValue = () => {
    console.log(name);
  };

  const Enteredagain = () =>{
    console.log(moles);
  }
  
 /* const Entertemp = () =>{
    console.log(temperature);
  }*/
  const Entereds = () =>{
    console.log(moles*8.314*temperature);
  }

  /* return (
    <div className="App">
      <Header />
    </div> */

  return (

    <div >
      <video className='video-1' autoPlay loop muted poster={Poster}>
        <source src={Video} type="video/mp4" />
      </video>
      <h1><center>PH-203 VACUUM PROJECT</center></h1>
      <div className="display">
        <a href="#div1">Pumping speed and throughput</a>
        <a href="#div2"> Suction chamber</a>
        <a href="#div3"> Group members</a>
      </div>
      <div id="div1" className="elemt1 container">
      <div className="inputs">
        
          <h2>Calculating Throughput and Pumping speed using gas equations: </h2>
          <label htmlFor="moles">Enter moles:   </label>
          <input type="text" id="moles" onChange={useOnce} placeholder="Enter moles"/>
          <br />
          <label  htmlFor="temp">Enter temperature in Kelvin:</label>
          <input type="text" id="temp" onChange={useForward} placeholder="Enter temperature in Kelvin"/>
          < br />
          <label htmlFor="time">Enter time in seconds:</label>
          <input type="text" id="time" onChange={useTime} placeholder="Enter time in seconds"/>
          < br />
          <label htmlFor="pressure">Enter pressure in Pascals:</label>
          <input type="text" id="pressure" onChange ={usepressure} placeholder ="Enter pressure in Pascals"/>
          < br />
          <button type="button" onClick={useDf}>Calculate</button>
      </div>
        
        <div className="div4 ">
        <h3>Throughput: {result ?? 'N/A'} J/s</h3>
        <h3>Pumping Speed : {result2 ?? 'N/A'} m<sup>3</sup>/s </h3>
        </div>
      </div>
        
        
        <div id="div2" className="elemt1 container">
          <div className="inputs">
            <h2>Calculating the same for a suction chamber when connected to a diaphragm pump: </h2>
            <label htmlFor="presin">Enter input pressure:   </label>
            
            <input type="text" id="presin" onChange={usepresin} placeholder="Enter input pressure(Pa)"/>
            <br />
            <label htmlFor="presout">Enter output pressure:   </label>
            <input type="text" id="presout" onChange={usepresout} placeholder="Enter output pressure(Pa)"/>
            <br />
            <label htmlFor="svol">Enter suction chamber volume:   </label>
            <input type="text" id="svol" onChange={usesvol} placeholder="Enter suction chamber volume(Vs)"/>
            <br />
            <label htmlFor="dsvol">Enter dead space volume:   </label>
            <input type="text" id="dsvol" onChange={usedsvol} placeholder="Enter dead-space volume(Vds)"/>
            <br />
            <label htmlFor="rotsp">Enter speed of rotation:   </label>
            <input type="text" id="rotsp" onChange={userotsp} placeholder="Enter rotational speed(n)"/>
            < br />
            <button onClick={usecalc}>Calculate</button>
          </div>
          <div className="div4">
          <h3>Throughput: {result3 ?? 'N/A'} J/s</h3>
          <h3>Pumping Speed : {result4 ?? 'N/A'} m<sup>3</sup>/s </h3>
          </div>
          
        </div>
         
        <div id="div3" >
          <h2> Group Members</h2>
          <p>Harsh Milind Joshi(2001CS28)</p>
          <p>Vinnakota Tarun Vikas(2001CS76)</p>
          <p>Hardik Goyal(2001CS27)</p>
          <p>Utkarsh Patil(2001CB61)</p>
          <p>Jayant Yadav(2001CB27)</p>
          <p>Puneet Sharma(2001CB41)</p>
        </div>
        

    </div>

 
  );
}

export default App;
