import React from 'react';
import PropTypes from 'prop-types';    // eslint-disable-line


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
                <h3>Home Page</h3>

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .homePage {
                            background-color: cornflowerblue;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default HomePage;
