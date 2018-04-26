import React from 'react';

import {Page} from './page/page';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount(){
        const xhr = new XMLHttpRequest();
        const url = 'https://api.instagram.com/v1/users/self/?access_token=' +
            '7600268179.4606266.0a0e1c6cf9f04bb38c9e7362a4880a98';
        xhr.dataType = "jsonp";
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.response);
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }

    render() {
        return (
            <div className="main">
                <Page/>
                <Page/>
            </div>
        );
    }
}

