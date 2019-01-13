import React from 'react';
import fetch from '../../clientUtils/request';
import PropTypes from 'prop-types';


import JsonViewerComponent from '../JsonViewerComponent';


class ArtWorks extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/

    static propTypes = {};    // eslint-disable-line

    getBlankState = () => ({
        artWorks: [],
    });

    constructor(props) {
        super(props);

        this.state = this.getBlankState();
    }

    componentWillMount = () => {
        // console.log("Fetching artWorks! ", window.location);

        fetch(`/api/art-works`, {
            mode: 'cors',
            header: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then((data) => {
                // const newData = data.map((image) => ({
                //     original: `http://www.sambagot.com/${galleryName}/gallery-images/${image}`,
                //     thumbnail: `http://www.sambagot.com/${galleryName}/gallery-images/${image}`,
                // }));

                this.setState({
                    artWorks: data,
                });
            });
    };

    /**
     *
     *
     *      Main Render
     *
     *
     */

    render() {
        console.log('this.state: ', this.state);

        return (
            <div className="artWorksComponent">
                <div className="row">
                    <div className="col-sm-12 col-xs-12">

                        ARTWORKS COMPONENT

                        <JsonViewerComponent
                            targetJson={this.state.artWorks}
                            jsonTitle={`Art Works`}
                        />
                    </div>
                </div>

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .artWorksComponent {
                            border: 2px solid blue;
                            padding: 10px;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default ArtWorks;
