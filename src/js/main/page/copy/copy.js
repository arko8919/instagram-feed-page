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
                All quest rooms at Matter of Form are designed with luxury and comfort in mind, creating seamless
                harmony with your retreat programme.
            </p>
            <Button
                onClick={props.onClick}
            />
        </div>
    )
};