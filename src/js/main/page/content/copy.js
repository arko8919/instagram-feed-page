import React from 'react';

import {Button} from './button';

export class Copy extends React.Component {
    render() {
        return (
            <div className='copy'>
                <h2>
                    {this.props.titleImage}
                    <div className='line'>
                    </div>
                </h2>
                <p>
                    All quest rooms at Matter of Form are designed with luxury and comfort in mind, creating seamless
                    harmony with your retreat programme.
                </p>
                <Button
                    onClick={this.props.onClick}
                />
            </div>
        )
    }
}