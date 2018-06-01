import React from 'react';

class SearchBar extends React.Component
{
    onInputChange(term)
    {
        this.props.onTermChange(term);
    }

    render()
    {
        return (
            <div className="search">
                <input
                    type="text"
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Enter text to search for gifs!"
                />
            </div>
        );
    }
}

export default SearchBar;
