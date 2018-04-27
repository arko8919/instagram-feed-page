import React from 'react';

import {Copy} from './copy/copy';
import {Img} from './img';
import {Decoration} from './decoration';

export const Page = props => {
    return (
        <div className='page'>
            <div className='module'>
                <Copy
                    onClick={props.onClick}
                    titleImage={props.titleImage}
                />
                <Decoration/>
                <Img
                    urlImage={props.urlImage}
                />
                <div className='background'>
                </div>
                <div className='rectangle'>
                </div>
            </div>
        </div>
    )
};