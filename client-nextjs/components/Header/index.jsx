import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';    // eslint-disable-line
import {Row, Col} from 'react-flexbox-grid';
import {Redirect} from 'react-router-dom';
import classNames from 'classnames';


/**
 *
 *
 *      Header
 *
 *
 **/

class Header extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/

    static propTypes = {};    // eslint-disable-line

    getBlankState = () => ({
        nextPage: "",
    });

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount = () => {
        this.setState(this.getBlankState());
    };


    /**
     *
     *
     *      Business Logic
     *
     *
     */

    redirectTo = (pageName) => {
        this.setState({
            nextPage: pageName,
        });
    };

    isSelected = (pathUri) => {
        return (window.location.pathname === pathUri);
    };


    /**
     *
     *
     *      Alt Renders
     *
     *
     */

    renderNavItem = (path, title) => {
        return (
            <div
                onClick={() => (this.redirectTo(path))}
                className={classNames(
                    styles.navItem,
                    (this.isSelected(path)) ? styles.selected : {}
                )}
            >
                {title}
            </div>
        );
    };


    /**
     *
     *
     *      Main Render
     *
     *
     */

    render() {
        if (this.state.nextPage && this.state.nextPage !== window.location.pathname) {
            return <Redirect push to={this.state.nextPage}/>;
        }

        return (
            <Row>
                <Col xs={12} sm={12}>

                    <Row className={styles.header}>
                        <Col smOffset={6} xs={12} sm={2}>
                            {this.renderNavItem("/", "Home")}
                        </Col>
                        <Col xs={12} sm={2}>
                            {this.renderNavItem("/gallery", "Gallery")}
                        </Col>
                        <Col xs={12} sm={2}>
                            {this.renderNavItem("/contact", "Contact")}
                        </Col>
                    </Row>

                </Col>
            </Row>
        );
    }
}

export default Header;
