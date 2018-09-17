import React from 'react';
import styles from './styles.css';
import fetch from '../../utils/request';
import PropTypes from 'prop-types';


import JsonViewerComponent from '../JsonViewerComponent';


class ArtWork extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/

    static propTypes = {
        artWorkId: PropTypes.string,
    };    // eslint-disable-line

    getBlankState = () => ({
        artWork: {},
    });

    constructor(props) {
        super(props);

        this.state = this.getBlankState();
    }

    componentWillMount = () => {
        console.log("Fetching artWork! ", window.location);

        // const artWorkId = /[^=]*$/.exec(this.props.location.search)[0];

        fetch(`/api/art-works/${this.props.artWorkId}`, {
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
                    artWork: data,
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
            <div className={styles.artWorkComponent}>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">

                        AN ARTWORK COMPONENT

                        <JsonViewerComponent
                            targetJson={this.state.artWork}
                            jsonTitle={`Glass Piece: ${this.state.artWorkId}`}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtWork;
