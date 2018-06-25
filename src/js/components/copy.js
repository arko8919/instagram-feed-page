import React from 'react';

import {Button} from './button';

export const Copy = props => {
    return (
        <div className='copy'>
            <h2>
                {props.titleImage}
                <div className='line'>
                </div>
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate.
            </p>
            <Button
                onClick={props.onClick}
            />
        </div>
    )
};