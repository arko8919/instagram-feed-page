import React from 'react';

import {Button} from './button';

export class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <h2>
                    Title
                </h2>
                {/* add / here */}
                <p>
                    All quest rooms at Matter of Form are designed with luxury and comfort in mind, creating seamless
                    harmony with your retreat programme.
                </p>
                <Button/>
            </div>
        )
    }
}