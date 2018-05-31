import React from 'react';

const GifItem = (obj) => {
    return (
        <li>
            <img src={obj.gif.url} alt={obj.gif.id} />
        </li>
    )
};

export default GifItem;
