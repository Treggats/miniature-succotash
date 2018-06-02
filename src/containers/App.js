import React from 'react';
import Modal from "react-modal";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import * as Actions from '../actions';
import '../styles/app.css';

class App extends React.Component
{
    componentWillMount()
    {
        Modal.setAppElement('body');
    }

    render()
    {
        return (
            <div>
                <SearchBar onTermChange={this.props.actions.requestGifs} />
                <GifList gifs={this.props.gifs} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
    
export default connect(mapStateToProps, mapDispatchToProps)(App);