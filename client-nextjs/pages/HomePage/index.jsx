import React from 'react';
import PropTypes from 'prop-types';    // eslint-disable-line

import Header from "../../components/Header";
import Footer from "../../components/Footer";


/**
 *
 *
 *      HomePage
 *
 *
 */

class HomePage extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/

    static propTypes = {};    // eslint-disable-line

    getBlankState = () => ({});

    constructor(props) {
        super(props);

        this.state = this.getBlankState();
    }


    /**
     *
     *
     *      Business Logic
     *
     *
     */


    /**
     *
     *
     *      Alt Renders
     *
     *
     */


    /**
     *
     *
     *      Main Render
     *
     *
     */

    render() {

        return (
            <div className="homePage">
                <Header />
                <h3>Home Page</h3>
                <Footer />

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .homePage {

                        }
                    `}
                </style>
            </div>
        );
    }
}

export default HomePage;
