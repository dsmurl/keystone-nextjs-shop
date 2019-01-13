import React from 'react';
import PropTypes from 'prop-types';    // eslint-disable-line
import requestService from '../../clientUtils/request';


import ArtWorks from '../../components/ArtWorks';
import Header from "../../components/Header";


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

    componentWillMount = () => {
        // this.loadCars();
    };


    /**
     *
     *
     *      Data Init
     *
     *
     */

    // loadCars = () => {
    //
    //     const successFunc = (response) => {
    //         this.setState({
    //             carsLibrary: response.data,
    //         });
    //     };
    //
    //     const errorFunc = (e) => {
    //         console.log("Call Error: ", e)
    //     };
    //
    //     requestService.getRequest('/api/getCars', {}, {}, successFunc, errorFunc);
    // };


    /**
     *
     *
     *      Business Logic
     *
     *
     */

    guidIndex = 0;
    semiGuid = () => {
        return `${++this.guidIndex}`;
    };


    /**
     *
     *
     *      Alt Renders
     *
     *
     */

    // renderCar = (car) => (
    //     <Row key={`car_block_${this.semiGuid()}`}>
    //         <Col smOffset={1} sm={10} xsOffset={1} xs={10}>
    //             <div className="carBlock">
    //                 <span className="dataField">Year:</span> <span className="data"> {car.year} </span><br />
    //                 <span className="dataField">Model:</span> <span className="data"> {car.model} </span><br />
    //                 <span className="dataField">Color:</span> <span className="data"> {car.color} </span><br />
    //             </div>
    //         </Col>
    //     </Row>
    // );


    /**
     *
     *
     *      Main Render
     *
     *
     */

    render() {

        return (
            <div>
                <Header />
                <div>
                    <h3>Gallery</h3>
                    <ArtWorks />

                    {/*<div className="carsBlock">*/}
                        {/*{ this.state.carsLibrary.map((car) => (this.renderCar(car))) }*/}
                    {/*</div>*/}
                </div>



                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .carsBlock {
                            margin: 15px;
                        }

                        .carBlock {
                            box-shadow: 0 1px 0 0 lightgray;
                            border: 1px solid grey;
                            margin-bottom: 10px;
                            padding: 15px;
                        }

                        .dataField {
                            display: inline-block;
                            font-size: 16px;
                            font-weight: bold;
                            width: 100px;

                            -moz-user-select: -moz-none;
                            -khtml-user-select: none;
                            -webkit-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                        }

                        .data {
                            display: inline-block;
                        }
                    `}
                </style>


            </div>
        );
    }
}

export default Gallery;
