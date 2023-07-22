import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {



      const [data, setData] = useState([]);

    const getCovidData = async()=>{
        try {
            const resp = await fetch('https://data.covid19india.org/data.json');
            const respData = await resp.json();
            console.log(respData.statewise[36]);
            setData(respData.statewise[36]);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const [showAni, setAni] = useState(false);
    useEffect( ()=>{
            getCovidData();
            setTimeout(() => {
                  setAni(true);
                  
            }, 1000);
    }, [])

  return (
    <>

    <div className='title'>
       <h2 className={showAni ? 'LiveAni': ''}> <span className='red'>🔴</span> Live</h2>
       <h2 className='titlee'>Covid 19 live report from Uttrakhand</h2>
    </div>
          
          {/* ................................ */}

      <div className='container'>

        <div className='card'>
            <p>Our <span>State</span></p>
            <h1> {data.state} </h1> 
      </div>
      <div className='card'>
            <p>Total<span> RECOVERED</span></p>
            <h1> {data.recovered} </h1> 
      </div>
      <div className='card'>
            <p>Total <span> CONFIRMED</span></p>
            <h1> {data.confirmed} </h1> 
      </div>
      <div className='card'>
            <p>Total <span> DEATH</span></p>
            <h1> {data.deaths} </h1> 
      </div>
      <div className='card'>
            <p>Total <span> ACTIVE</span></p>
            <h1> {data.active} </h1> 
      </div>

      <div className='card'>
            <p>Last <span> UPDATED</span></p>
            <h1> {data.lastupdatedtime} </h1> 
      </div>

        

      </div>
      {/* <p className='cntr'></p> */}
      <a href ='https://twitter.com/prvnBrTwal' target="_blank" rel="noopener noreferrer" className='cntr' >@Praveen-Singh</a>
    </>
  )

}

export default Covid
