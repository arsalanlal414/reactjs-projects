import { useState } from 'react';
import './App.css';
import Data from './Data';
import List from './List'

function App() {
  const [people, setPeople] = useState(Data)

  return(
  <main className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </main>
  )
}

export default App;
