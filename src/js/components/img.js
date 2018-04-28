import React from 'react';

export const Img = props => {
    return (
        <img
            src={props.urlImage.url}
            width={props.urlImage.width}
            height={props.urlImage.height}
            alt={props.titleImage}
        />
    )
};