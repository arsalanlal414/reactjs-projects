import React,{ useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {

    const [readMore, setReadMore] = useState(false);
    return (
    <div className="container">
        <div className="image">
            <img src={image} alt='tour'/>
        </div>
        <div className="content">
            <div className="content-top">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
            <div className="details">
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className='read-btn' onClick={()=> setReadMore(!readMore)}>
                        {readMore? 'show less' : 'show more'}
                    </button>
                </p>
            </div>
            <button className='del-btn' onClick = {(event)=> removeTour(event, id)}> Not Interested </button>
        </div>
    </div>
  )
}

export default Tour