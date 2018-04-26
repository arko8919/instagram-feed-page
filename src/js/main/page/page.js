import React from 'react';

import {Content} from './content/content';
import {Img} from './img';
import {Decoration} from './decoration';

export class Page extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='module'>
                    <Content/>
                    <Img/>
                    <Decoration/>
                    <div className='background'>
                    </div>
                    <div className='rectangle'>
                    </div>
                </div>
            </div>
        )
    }
}