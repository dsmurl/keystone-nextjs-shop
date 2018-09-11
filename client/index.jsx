import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from './styles.css';


import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './containers/HomePage';
import Gallery from './containers/Gallery';
import Contact from './containers/Contact';


class App extends React.Component{

    render () {
        return (
            <div className={styles.appComponent}>
                <BrowserRouter>
                    <Grid fluid>
                        <Header />
                        <Row>
                            <Col smOffset={1} sm={10} xsOffset={1} xs={10}>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/gallery" component={Gallery}/>
                                <Route path="/contact" component={Contact}/>
                            </Col>
                        </Row>
                        <Footer/>
                    </Grid>
                </BrowserRouter>
            </div>


            // <div className={styles.appComponent}>
            //     <Header />
            //
            //     APP COMPONENT
            //
            //     <Route exact path="/" component={HomePage}/>
            //     <Route path="/gallery" component={Gallery}/>
            //     <Route path="/contact" component={Contact}/>
            //     <Route path="/hco_admin" component={Admin}/>
            //
            //
            //     <ArtWork
            //         artWorkId='5b8b49d038c8a71d5388f279'
            //     />
            //     <ArtWorks />
            //
            //     <Footer />
            // </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('.react-container')
);