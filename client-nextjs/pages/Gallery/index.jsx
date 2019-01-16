import React from 'react';
import PropTypes from 'prop-types';    // eslint-disable-line

import ArtWorks from '../../components/ArtWorks';
import Header from "../../components/Header";
import Footer from "../../components/Footer";


/**
 *
 *
 *      Gallery
 *
 *
 */

class Gallery extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/

    static propTypes = {};    // eslint-disable-line

    getBlankState = () => ({
    });

    constructor(props) {
        super(props);

        this.state = this.getBlankState();
    }


    /**
     *
     *
     *      LifeCycle Methods
     *
     *
     */

    componentDidMount = () => {

    };


    /**
     *
     *
     *      Data Init
     *
     *
     */


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
            <div className="content">
                <Header page="Gallery"/>
                <h3>Gallery Page</h3>
                <ArtWorks />
                <Footer />

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .content {

                        }
                    `}
                </style>


            </div>
        );
    }
}

export default Gallery;
