import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';


/**
 *
 *
 *      HocCheckbox
 *
 *
 */

class HocCheckbox extends React.Component {  // eslint-disable-line

	static propTypes = {
		name: PropTypes.string.isRequired,
		label: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,

		checked: PropTypes.bool,
	};

	getBlankState = () => ({});

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


	/**
	 *
	 *
	 *      Internal Business Logic Methods
	 *
	 *
	 */


	/**
	 *
	 *
	 *       Handler Methods
	 *
	 *
	 */

	clickHandler = () => {
		if (!this.props.disabled && this.props.onClick) {
			this.props.onClick();
		}
	};


	/**
	 *
	 *
	 *      Alt Render Methods
	 *
	 *
	 */


	/**
	 *
	 *
	 *      Main Render Method
	 *
	 *
	 */

	render() {

		let calcBoxStyle = {};

		if (this.props.disabled) {
			calcBoxStyle = classNames(
				styles.hocCheckbox,
				(this.props.checked) ? styles.disabledSelected : styles.disabledUnselected,
			);
		} else {
			calcBoxStyle = classNames(
				styles.ccCheckbox,
				(this.props.checked) ? styles.selected : {},
			);
		}

		return (
			<span>
				<span
					className={calcBoxStyle}
					onClick={this.clickHandler}
					disabled={this.props.disabled || false}
				>
					{ (this.props.checked) ? (<FontAwesome name="check"/>) : (<FontAwesome name=""/>) }
				</span>
				{(this.props.label) ? (
					<span className={styles.labelText}>&nbsp;&nbsp;&nbsp;{this.props.label}&nbsp;</span>) : (
					<span>&nbsp;</span>)}
			</span>
		);
	}
}

export default HocCheckbox;
