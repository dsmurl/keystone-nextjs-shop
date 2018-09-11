import React from 'react';
import styles from './styles.css';
import {Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
// import FontAwesome from 'react-fontawesome';


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
            <Row className={styles.footer}>
                <Col xs={11} sm={11}>
                    Footer
                </Col>
                <Col xs={1} sm={1}>
                    <div className={styles.adminButton}>
                        {/*<Link to={`/hco_admin`}>*/}
                            {/*<FontAwesome name="pencil-square-o"/>*/}
                        {/*</Link>*/}
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Footer;

