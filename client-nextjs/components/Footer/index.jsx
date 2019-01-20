import React from 'react';
import Link from 'next/link';


/**
 *
 *
 *      Footer
 *
 *
 */

class Footer extends React.Component {

    /**
     *
     *
     *      Guts
     *
     *
     **/

    static propTypes = {};    // eslint-disable-line

    getBlankState = () => ({});

    constructor(props) {
        super(props);

        this.state = this.getBlankState();
    }


    /**
     *
     *
     *      Business Logic
     *
     *
     */


    /**
     *
     *
     *      Alt Renders
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
                <div>
                    Keystone Shop TM 2018
                </div>
                <div className="adminButton">
                    <Link
                        href="/keystone"
                    ><a>Admin</a></Link>
                </div>

                { /*language=CSS*/ }
                <style jsx>
                    {`
                        .content {
                            text-align: center;
                            background: lightskyblue;

                            font-size: 14px;

                            -moz-user-select: -moz-none;
                            -khtml-user-select: none;
                            -webkit-user-select: none;
                            -ms-user-select: none;
                            user-select: none;

                            padding: 5px;
                        }

                        .adminButton {
                            color: grey;
                            text-align: right;
                            font-size: 0.5rem;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Footer;

