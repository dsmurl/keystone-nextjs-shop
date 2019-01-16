import React from 'react';
import PropTypes from 'prop-types';    // eslint-disable-line
import { Redirect } from 'react-router-dom';
import Link from 'next/link';

import Meta from '../Meta';

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

    static propTypes = {
        page: PropTypes.string
    };    // eslint-disable-line

    getBlankState = () => ({
        page: ""
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

    isSelected = (title) => {
        return this.props.page === title;
    };


    /**
     *
     *
     *      Alt Renders
     *
     *
     */

    renderNavItem = (path, title) => (
        <div className={`navItem ${(this.isSelected(title)) ? 'selected' : ''}`}>
            <Link
                href={path}
                prefetch
            ><a>{title}</a></Link>

            { /*language=CSS*/ }
            <style jsx>
                {`
                    .navItem {
                        background: lightskyblue;

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
                        background: lightgreen;
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
        // if (this.state.nextPage && this.state.nextPage !== window.location.pathname) {
        //     return <Redirect push to={this.state.nextPage}/>;
        // }

        return (
            <div>
                <Meta />
                <div className=".content">

                    {this.renderNavItem("/", "Home")}
                    {this.renderNavItem("/Gallery", "Gallery")}
                    {this.renderNavItem("/Contact", "Contact")}

                    { /*language=CSS*/ }
                    <style jsx>
                        {`
                            .content {
                                background: lightblue;
                                display: flex;
                                flex-direction: row-reverse;
                                margin-top: 10px;
                            }

                            @media only screen and (min-width: 500px) {
                                .content {
                                    background: lightblue;
                                    display: flex;
                                    flex-direction: column-reverse; /* or inline-flex */
                                }
                            }
                        `}
                    </style>
                </div>
            </div>
        );
    }
}

export default Header;
