import React from 'react';

import {Copy} from './copy';
import {Img} from './img';

export const Page = props => {
    return (
        <div className='page'>
            <div className='module'>
                <Copy
                    onClick={props.onClick}
                    titleImage={props.titleImage}
                />
                <div className='decoration'></div>
                <Img
                    titleImage={props.titleImage}
                    urlImage={props.urlImage}
                />
                <div className='background'></div>
                <div className='rectangle'></div>
            </div>
        </div>
    )
};