import React from 'react';

import {Page} from './page/page';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="main">
                <Page/>
                <Page/>
            </div>
        );
    }
}

