import { useState } from 'react';
import './App.css';
import Data from './Data';
import List from './List'

  // console.log(Data)

function App() {
  const [people, setPeople] = useState(Data)

  return(
  <main className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
    </main>
  )

  // console.log(Data)
  // const [people, setPeople] = useState(Data)
  // // console.log("peoples: ",People)
  // return (
  //   <div className="App">
  //     <h3>{people.length} Birthdays Today</h3>
      
  //     <div className='card'>
  //       <List people={people}/>
  //       <button onClick={() => setPeople([])}>clear All</button>
  //     </div>
      
  //   </div>
  // );
}

export default App;
