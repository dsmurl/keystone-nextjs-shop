import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';    // eslint-disable-line
import {Row, Col} from 'react-flexbox-grid';
import requestService from '../../utils/request';


import ArtWorks from '../../components/ArtWorks';


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
    //             <div className={styles.carBlock}>
    //                 <span className={styles.dataField}>Year:</span> <span className={styles.data}> {car.year} </span><br />
    //                 <span className={styles.dataField}>Model:</span> <span className={styles.data}> {car.model} </span><br />
    //                 <span className={styles.dataField}>Color:</span> <span className={styles.data}> {car.color} </span><br />
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
            <Row>
                <Col xs={12} sm={12}>
                    <h3>Gallery</h3>
                    <ArtWorks />

                    {/*<div className={styles.carsBlock}>*/}
                        {/*{ this.state.carsLibrary.map((car) => (this.renderCar(car))) }*/}
                    {/*</div>*/}
                </Col>
            </Row>
        );
    }
}

export default Gallery;
