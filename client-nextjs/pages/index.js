import React from 'react'

import HomePage from './HomePage';
import Header from '../components/Header'

class App extends React.Component {

    tests = [];

    render = () => (
        <div>
            <Header />
            <HomePage />
        </div>
    )
}

export default App;
