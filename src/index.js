import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component
{
    handleTermChange(term)
    {
        console.log(term);
    }

    render()
    {
        return (
            <SearchBar onTermChange={this.handleTermChange} />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
