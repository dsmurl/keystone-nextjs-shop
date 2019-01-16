import React from 'react';

import HomePage from './HomePage';

class App extends React.Component {

    tests = [];

    render = () => (
        <div className="content">
            <HomePage />

            { /*language=CSS*/ }
            <style jsx global>
                {`
                    .content {

                    }
                `}
            </style>
        </div>
    )
}

export default App;
