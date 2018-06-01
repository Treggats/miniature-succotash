import React from 'react';
import Modal from "react-modal";
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import '../styles/app.css';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        };

        this.handleTermChange = this.handleTermChange.bind(this);
    }

    componentWillMount()
    {
        Modal.setAppElement('body');
    }

    openModal = (gif) => {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    };

    closeModal = () => {
        this.setState({
            modelIsOpen: false,
            selectedGif: null
        });
    };

    handleTermChange = (term) => {
        const apiKey = 'dc6zaTOxFJmzC';
        const limit = 10;
        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}&limit=${limit}`;

        axios.get(url).then(response => {
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
                <GifList
                    gifs={this.state.gifs}
                    onGifSelect={selectedGif => this.openModal(selectedGif)}
                />
                <GifModal
                    modalIsOpen={this.state.modalIsOpen}
                    selectedGif={this.state.selectedGif}
                    onRequestClose={ () => this.closeModal()}
                />
            </div>
        );
    }
}

export default App;