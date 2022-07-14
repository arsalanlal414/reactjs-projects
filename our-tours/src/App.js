import './App.css';
import React, {useEffect, useState} from 'react';

// components
import Loading from './components/Loading';
import Tours from './components/Tours';

function App() {

  const url = "https://course-api.com/react-tours-project";
  
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () =>{
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false)
    setTours(tours)
  }
 
  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (event, id)=>{
    event.preventDefault()
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  
  if(loading){
    return(<Loading />)
  }

  return(
    <Tours tours={tours} removeTour={removeTour}/>
  )

}

export default App;


