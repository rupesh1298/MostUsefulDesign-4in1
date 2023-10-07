import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RandomNumGen() {
  const [data, setData] = useState([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,
    8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,
    4,5,6,7,8,9,1,2,3]);
  // const[data,setData]=useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  // 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
  const [isShuffling, setIsShuffling] = useState(false);
  const shuffleInterval = 80; // Interval in milliseconds

  useEffect(() => {
    if (isShuffling) {
      const intervalId = setInterval(() => {
        shuffleArray(); ///create an interval id for stopping function & calling function of shuffledata creator
      }, shuffleInterval);

       return () => clearInterval(intervalId);
    }
  }, [isShuffling]);
  //when u want to use useEffect according to conditions thats why

  const startShuffling = () => {
    setIsShuffling(true);
  };
  const stopShuffling = () => {
    setIsShuffling(false);
  };
  const shuffleArray = () => {
    //copy data
    const shuffleArrData = [...data];
    for (let i = shuffleArrData.length - 1; i > 0; i--) {
      // Create random index
      const j = Math.floor(Math.random() * (i + 1));//0 will give 0 i.e i+1 and shuffling the data
      [shuffleArrData[i], shuffleArrData[j]] = [shuffleArrData[j], shuffleArrData[i]];
    }
    setData(shuffleArrData);
  };

  return (
    <div className='container'>
      {data.map((index, id) => (
        <div key={id}><input type='text' value={index} style={{width:"30px",textAlign:"center"}}></input></div>
      ))}
      <div style={{ marginTop: '50px'}}>
        {/* <input type="text" style={{width:"30px",textAlign:"center"}}/><input type="text"style={{width:"30px",textAlign:"center"}} /><input type="text"style={{width:"30px",textAlign:"center"}} /><input type="text"style={{width:"30px",textAlign:"center"}} /><input type="text"style={{width:"30px",textAlign:"center"}} /><input type="text"style={{width:"30px",textAlign:"center"}} />
        <br></br><br></br> */}
        <button onClick={startShuffling} className='btn btn-outline-danger'>Start</button>
        <button onClick={stopShuffling} className='btn btn-outline-primary'>Stop</button>
      </div>
    </div>
  );
}
