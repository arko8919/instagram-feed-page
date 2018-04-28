import React from 'react';

import {Page} from '../components/page';

export class Section extends React.Component {
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

    // update pages with images and titles and change indexes in arrays
    updatePages() {
        this.setState((state) => ({
            urlImageOne: state.response.data[state.positionInArrayImageOne].images.standard_resolution,
            urlImageTwo: state.response.data[state.positionInArrayImageTwo].images.standard_resolution,
            titleImageOne: state.response.data[state.positionInArrayImageOne].caption.text,
            titleImageTwo: state.response.data[state.positionInArrayImageTwo].caption.text,
            positionInArrayImageOne: state.positionInArrayImageOne + 1,
            positionInArrayImageTwo: state.positionInArrayImageTwo - 1
        }));
    }

    // on click event on page one, change image and title
    handleClickPageOne() {
        // if pages are the same, skip and load next
        if (this.state.positionInArrayImageOne === this.state.positionInArrayImageTwo + 1) {
            this.setState((state) => ({
                positionInArrayImageOne: state.positionInArrayImageOne + 1
            }), this.updatePageOne);
        } else {
            this.updatePageOne();
        }
    }

    updatePageOne() {
        // reset if end of array
        if (this.state.positionInArrayImageOne > 9) {
            this.setState({
                positionInArrayImageOne: 0
            }, this.setStatePageOne);
        } else {
            this.setStatePageOne();
        }
    }

    setStatePageOne() {
        // add image and title to page one
        this.setState((state) => ({
            urlImageOne: state.response.data[state.positionInArrayImageOne].images.standard_resolution,
            titleImageOne: state.response.data[state.positionInArrayImageOne].caption.text,
            positionInArrayImageOne: state.positionInArrayImageOne + 1
        }))
    }


    // on click event on page two, change image and title
    handleClickPageTwo() {
        // if pages are the same, skip and load next
        if (this.state.positionInArrayImageOne - 1 === this.state.positionInArrayImageTwo) {
            this.setState((state) => ({
                positionInArrayImageTwo: state.positionInArrayImageTwo - 1
            }), this.updatePageTwo);
        } else {
            this.updatePageTwo();
        }
    }

    updatePageTwo() {
        // reset if beginning of array
        if (this.state.positionInArrayImageTwo < 0) {
            this.setState({
                positionInArrayImageTwo: 9
            }, this.setSatePageTwo);
        } else {
            this.setSatePageTwo();
        }
    }

    setSatePageTwo() {
        // add image and title to page two
        this.setState((state) => ({
            urlImageTwo: state.response.data[state.positionInArrayImageTwo].images.standard_resolution,
            titleImageTwo: state.response.data[state.positionInArrayImageTwo].caption.text,
            positionInArrayImageTwo: state.positionInArrayImageTwo - 1
        }));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            response: nextProps.response
        }, () => this.updatePages());
    }

    render() {
        return (
            <section>
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
            </section>
        );
    }
}