import React from 'react'

const List = ({people}) => {
  return(
        <ul>
            {
                 people.map(data =>{
                    return(
                        <li>
                        { "loading..." &&  <img src={data.image}/> }
                        <div>
                            <h4>{data.name}</h4>
                            <p>{data.age} years</p>
                        </div>
                        </li>
                    );
                })
            }
        </ul>
  );
}

export default List