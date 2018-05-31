import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import './index.css';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            gifs: []
        };

        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange = (term) => {
        const apiKey = 'dc6zaTOxFJmzC';
        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}`;

        axios.get(url).then(response => {
            console.log(response.data.data[0]);
            this.setState({
                gifs: response.data.data
            });
        }).catch(error => {
            if ('response' in error) {
                console.log(error.response.data);
            }
        });
    };

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
