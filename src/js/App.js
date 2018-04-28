import React, {Component} from 'react';

import {Header} from './components/header';
import {Main} from './containers/main';
import {Footer} from './components/footer';

import '../css/App.css'; // application styles

class App extends Component {

    render() {
        return (
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
