import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            gifs: []
        }
    }

    handleTermChange(term)
    {
        const apiKey = 'dc6zaTOxFJmzC';
        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}`;

        axios.get(url).then(response => {
            console.log(response.data.data[0]);
        }).catch(error => {
            if ('response' in error) {
                console.log(error.response.data);
            }
        });
    }

    render()
    {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
