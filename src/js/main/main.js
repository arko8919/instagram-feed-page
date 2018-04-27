import React from 'react';

import {Page} from './page/page';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: undefined,
            urlImageOne: '',
            urlImageTwo: '',
            titleImageOne: '',
            titleImageTwo: '',
            positionInArrayImageOne: 0,
            positionInArrayImageTwo: 9
        };

        this.handleClickPageOne = this.handleClickPageOne.bind(this);
        this.handleClickPageTwo = this.handleClickPageTwo.bind(this);
    }

    // Instagram API
    requestDataFromInstagram() {
        const xhr = new XMLHttpRequest();
        const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
            // access token
            '7600268179.4606266.0a0e1c6cf9f04bb38c9e7362a4880a98';

        xhr.dataType = "json";
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                // parse json to object
                const response = JSON.parse(xhr.response);
                this.setState({
                    response: response
                });

                // on first page load set two images and titles
                this.getData();
            }
        };

        xhr.open("GET", url);
        xhr.send();
    }

    getData() {
        this.setState({
            urlImageOne: this.state.response.data[this.state.positionInArrayImageOne].images.standard_resolution,
            urlImageTwo: this.state.response.data[this.state.positionInArrayImageTwo].images.standard_resolution,
            titleImageOne: this.state.response.data[this.state.positionInArrayImageOne].caption.text,
            titleImageTwo: this.state.response.data[this.state.positionInArrayImageTwo].caption.text,
            positionInArrayImageOne: this.state.positionInArrayImageOne + 1,
            positionInArrayImageTwo: this.state.positionInArrayImageTwo - 1
        });
    }

    // on click event on page one button, change image and title
    handleClickPageOne() {
        this.setState({
            urlImageOne: this.state.response.data[this.state.positionInArrayImageOne].images.standard_resolution,
            titleImageOne: this.state.response.data[this.state.positionInArrayImageOne].caption.text,
            positionInArrayImageOne: this.state.positionInArrayImageOne + 1
        });

        // reset if hit end of data array
        if (this.state.positionInArrayImageOne === 9) {
            this.setState({
                positionInArrayImageOne: 0
            });
        }
    }

    // on click event on page two button, change image and title
    handleClickPageTwo() {
        this.setState({
            urlImageTwo: this.state.response.data[this.state.positionInArrayImageTwo].images.standard_resolution,
            titleImageTwo: this.state.response.data[this.state.positionInArrayImageTwo].caption.text,
            positionInArrayImageTwo: this.state.positionInArrayImageTwo - 1

        });

        // reset if hit beginning of data array
        if (this.state.positionInArrayImageTwo === 0) {
            this.setState({
                positionInArrayImageTwo: 9
            });
        }
    }

    componentDidMount() {
        this.requestDataFromInstagram();
    }

    render() {
        console.log(this.state.response);
        return (
            <div className="main">
                <Page
                    onClick={this.handleClickPageOne}
                    urlImage={this.state.urlImageOne}
                    titleImage={this.state.titleImageOne}
                />

                <Page
                    onClick={this.handleClickPageTwo}
                    urlImage={this.state.urlImageTwo}
                    titleImage={this.state.titleImageTwo}
                />
            </div>
        );
    }
}

