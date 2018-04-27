import React from 'react';

export class Img extends React.Component {
    render() {
        return (
            <img
                src={this.props.urlImage.url}
                width={this.props.urlImage.width}
                height={this.props.urlImage.height}
            />
        )
    }
}