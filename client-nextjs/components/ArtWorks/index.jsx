import React from 'react';
import fetch from '../../clientUtils/request';
import PropTypes from 'prop-types';


import JsonViewerComponent from '../JsonViewerComponent';
import ArtWork from '../ArtWork';


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

    componentDidMount = () => {
        // console.log("Fetching artWorks! ", window.location);

        fetch(`/api/art-works`, {
            mode: 'cors',
            header: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then((data) => {
                this.setState({
                    artWorks: data,
                });
            });
    };



    /**
     *
     *
     *      Sub Renderers
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
                <div className="itemList">
                    {
                        this.state.artWorks.map(artWork => (<ArtWork data={artWork}  key={artWork._id}/>))
                    }
                </div>

                <JsonViewerComponent
                    targetJson={this.state.artWorks}
                    jsonTitle={`Art Works`}
                />

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .content {

                        }

                        .itemList {
                            border: 2px solid blue;
                            padding: 10px;
                            border-radius: 4px;
                            margin-bottom: 20px;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default ArtWorks;
