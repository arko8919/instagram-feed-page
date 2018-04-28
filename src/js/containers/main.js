import React from 'react';

import {Section} from '../containers/section';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: undefined
        };
    }

    // get data from instagram api
    requestDataFromInstagram() {
        const xhr = new XMLHttpRequest();
        const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
            // access token
            '7600268179.4606266.0a0e1c6cf9f04bb38c9e7362a4880a98' +
            // latest 10 images
            '&count=10';

        xhr.dataType = "json";
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                // parse json to object
                const response = JSON.parse(xhr.response);

                this.setState({
                    response: response
                });
            }
        };

        xhr.open("GET", url);
        xhr.send();
    }

    componentDidMount() {
        this.requestDataFromInstagram();
    }

    render() {
        return (
            <div className='main'>
                <Section response={this.state.response}/>
            </div>
        );
    }
}

