import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../clientUtils/constants';


class ArtWork extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/


    static propTypes = {
        data: PropTypes.object.isRequired,
    };    // eslint-disable-line

    static defaultProps = {
    };



    /**
     *
     *
     *      Sub Renders
     *
     *
     */


    renderImage = (image) => (
        <div className="image" key={image._id}>
            <img src={`${CONSTANTS.IMAGES_URI}${image.image.filename}`} width='160px' height='120px'/>

            { /*language=CSS*/ }
            <style jsx>
                {`

                    .image {
                        flex: 1;
                        margin: 5px;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );



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
                <span className="fieldTitle">Name:</span>
                <span className="name"> { this.props.data.name } </span>
                <br />
                <div className="fieldTitle">Description:</div>
                <div className="description">
                    <div dangerouslySetInnerHTML={{__html: this.props.data.description}} />
                </div>
                <div className="ebayAdLink">
                    <a href={this.props.data.ebayAdLink} target="_blank">Buy Me Now!!!</a>
                </div>
                <br />
                <div className="images">
                    { this.props.data.images.map((image) => this.renderImage(image)) }
                </div>
                <div className="idTag">
                    { this.props.data._id }
                </div>

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .content {
                            border: 1px solid blue;
                            padding: 10px;
                            border-radius: 4px;
                        }

                        .fieldTitle {
                            font-weight: bold;
                        }

                        .name {
                            padding-left: 10px;
                        }

                        .description {
                            padding-left: 10px;
                        }

                        .ebayAdLink {
                            color: blue;
                            text-align: center;
                        }

                        .images {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;

                            align-items: center;
                            width: 100%;

                            background-color: cornflowerblue;
                            border-radius: 4px;
                        }

                        .idTag {
                            text-align: right;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default ArtWork;
