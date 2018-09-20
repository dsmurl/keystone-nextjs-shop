import React from 'react';
import PropTypes from 'prop-types';    // eslint-disable-line
import {Redirect} from 'react-router-dom';
import Link from 'next/link';

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
        // nextPage: "",
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

    // redirectTo = (pageName) => {
    //     this.setState({
    //         nextPage: pageName,
    //     });
    // };

    isSelected = (pathUri) => {
        // return (window.location.pathname === pathUri);
        return false;
    };


    /**
     *
     *
     *      Alt Renders
     *
     *
     */

    renderNavItem = (path, title) => (
        <Link
            className={`.navItem ${(this.isSelected(path)) ? '.selected' : ''}`}
            href={path}
            prefetch
        >{title}</Link>
    );

    /**
     *
     *
     *      Main Render
     *
     *
     */

    render() {
        // if (this.state.nextPage && this.state.nextPage !== window.location.pathname) {
        //     return <Redirect push to={this.state.nextPage}/>;
        // }

        return (
            <div>
                <div className=".header">
                    {this.renderNavItem("/", "Home")}
                    {this.renderNavItem("/gallery", "Gallery")}
                    {this.renderNavItem("/contact", "Contact")}
                </div>

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .header {
                            background: lightblue;
                            display: flex;
                            flex-direction: row-reverse;
                        }

                        .navItem {
                            background: lightblue;

                            text-align: center;
                            font-weight: normal;
                            font-size: 14px;
                            line-height: 20px;

                            padding: 5px;
                        }

                        .navItem:hover {
                            box-shadow: 0px -2px 0px #0000FF inset;
                        }

                        .selected {
                            font-size: 18px;
                            box-shadow: 0px -1px 0px #0000FF inset;
                            color: #0000FF;
                        }

                        @media only screen and (min-width: 500px) {
                            .header {
                                background: lightblue;
                                display: flex;
                                flex-direction: column-reverse; /* or inline-flex */
                            }
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Header;
