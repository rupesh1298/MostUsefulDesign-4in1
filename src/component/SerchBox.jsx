import React, { useState } from 'react'

export default function SerchBox() {
    const arr=['Ahmednagar',
    'Akola',
    'Amravati',
    'Aurangabad',
    'Beed',
    'Bhandara',
    'Buldhana',
    'Chandrapur',
    'Dhule',
    'Gadchiroli',
    'Gondia',
    'Hingoli',
    'Jalgaon',
    'Jalna',
    'Kolhapur',
    'Latur',
    'Mumbai City',
    'Mumbai Suburban',
    'Nagpur',
    'Nanded',
    'Nandurbar',
    'Nashik',
    'Osmanabad',
    'Palghar',
    'Parbhani',
    'Pune',
    'Raigad',
    'Ratnagiri',
    'Sangli',
    'Satara',
    'Sindhudurg',
    'Solapur',
    'Thane',
    'Wardha',
    'Washim',
    'Yavatmal'];
    const [data, setData] = useState('');
    const [search,setSearch]=useState([]);//make array to store filtered data

    const handleChange=(e)=>{
        const unComing=e.target.value;
        if(unComing==='')
        {
            setData(unComing);
            setSearch([]);
        }else{
            setData(unComing);
        const findData=arr.filter((val)=>
           (val.toLowerCase().startsWith(unComing)),
          
        )
     setSearch(findData); 
        }
    }
  return (
    <div>
      <label htmlFor="in">District in Maharashtra</label>
      <input type="text" value={data} onChange={handleChange} autoFocus name='in' id='in' />
      <div>
        {
            search.map((item,id)=>(
                <div style={{marginLeft:"0px", backgroundColor:"lightcyan", width:"100%", display:'flex',justifyContent:"flex-start"}}>
                  <li style={{listStyle:"none", display:"flex"}}>{item}</li>
                  </div>
            ))
        }
      </div>
    </div>
  )
}

