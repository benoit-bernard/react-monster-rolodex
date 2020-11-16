import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='monster'
            className='card-img'
            src={'https://robohash.org/$' + props.monster.id + '?set=set1&size=100x100'}
            />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);