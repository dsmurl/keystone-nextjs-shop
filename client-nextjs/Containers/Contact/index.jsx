import React from 'react';
import styles from './styles.css';    // eslint-disable-line
import PropTypes from 'prop-types';    // eslint-disable-line
import {Row, Col} from 'react-flexbox-grid';

/**
 *
 *
 *      Contact
 *
 *
 */

class Contact extends React.Component {

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
			<Row>
				<Col xs={12} sm={12}>
					<h3>Contact</h3>
				</Col>
			</Row>
		);
	}
}

export default Contact;
