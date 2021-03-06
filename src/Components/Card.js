import React from 'react';

const Card = ( { name, email, id }) =>{
    
    return(
        <div className='tc bg-blue dib br3 pa3 ma2 grow bw2 '>
            <img alt='robots' src={`https://robohash.org/t${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;