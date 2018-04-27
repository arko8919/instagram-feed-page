import React from 'react';

import {Copy} from './content/copy';
import {Img} from './img';
import {Decoration} from './decoration';

export class Page extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='module'>
                    <Copy
                        onClick={this.props.onClick}
                        titleImage={this.props.titleImage}
                    />
                    <Decoration/>
                    <Img
                        urlImage={this.props.urlImage}
                    />
                    <div className='background'>
                    </div>
                    <div className='rectangle'>
                    </div>
                </div>
            </div>
        )
    }
}