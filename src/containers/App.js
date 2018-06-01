import React from 'react';
import Modal from "react-modal";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../components/SearchBar';
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
    
export default connect(mapStateToProps, mapDispatchToProps)(App);