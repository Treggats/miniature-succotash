import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            gifs: [
                {
                    id: 1,
                    url: 'https://dummyimage.com/300x300/000/fff'
                },
                {
                    id: 2,
                    url: 'https://dummyimage.com/300x300/000/fff'
                },
                {
                    id: 3,
                    url: 'https://dummyimage.com/300x300/000/fff'
                },
                {
                    id: 4,
                    url: 'https://dummyimage.com/300x300/000/fff'
                }
            ]
        }
    }

    handleTermChange(term)
    {
        console.log(term);
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
