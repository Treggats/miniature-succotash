import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component
{
    render()
    {
        return (
            <SearchBar />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
