import React from 'react';

const GifItem = (obj) => {
    return (
        <div className="gif-item">
            <img src={obj.gif.images.downsized.url} alt={obj.gif.id} />
        </div>
    )
};

export default GifItem;
