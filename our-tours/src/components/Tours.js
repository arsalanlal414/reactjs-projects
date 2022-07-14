import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
    <main>
        <h1>Our Tours</h1>
        <div className="underline"></div>
        {
          tours.map(tour =>{
            return(
              <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            )
          })
        }
      </main>
   
  )
}

export default Tours