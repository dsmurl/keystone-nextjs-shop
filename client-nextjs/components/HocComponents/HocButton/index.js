import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';


/**
 *
 *
 *      HocButton
 *
 *
 */

class HocButton extends React.Component {  // eslint-disable-line

	static propTypes = {
		name: PropTypes.string,
		label: PropTypes.string.isRequired,
		fontAwesomeIcon: PropTypes.string,
		disabled: PropTypes.bool,
		onClickHandler: PropTypes.func,

		fullWidth: PropTypes.bool,
		small: PropTypes.bool,

		buttonStyle: PropTypes.string,
		id: PropTypes.string
	};

	getBlankState = () => ({
		hovering: false,
		pressed: false,
	});

	constructor(props) {
		super(props);

		this.state = this.getBlankState();
	}


	/**
	 *
	 *
	 *      Form Component Methods
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


	/**
	 *
	 *
	 *      Alt Render Methods
	 *
	 *
	 */

	nativeMouseLeaveHandler = () => {
		this.setState({
			hovering: false,
			pressed: false,
		});
	};

	nativeMouseEnterHandler = () => {
		this.setState({
			hovering: true,
		});
	};

	nativeMouseUpHandler = () => {
		if (this.state.pressed && this.props.onClickHandler) {
			this.props.onClickHandler();
		}

		this.setState({
			pressed: false,
		});
	};

	nativeMouseDownHandler = () => {
		this.setState({
			pressed: true,
		});
	};


	/**
	 *
	 *
	 *      Main Render Method
	 *
	 *
	 */

	render() {
		let calcButtonStyle = {};
		const designatedPropsButtonStyle = (this.props.buttonStyle) ? this.props.buttonStyle : "";

		if (this.props.disabled) {
			calcButtonStyle = classNames(
				styles.buttonDisabled,
				styles.buttonLabel,
				(this.props.fullWidth) ? styles.buttonFullWidth : {},
				(this.props.small) ? styles.smallButton : {},
			);
		} else {
			switch (designatedPropsButtonStyle.toString().toLowerCase()) {
				case 'secondary':
					calcButtonStyle = classNames(
						styles.buttonSecondaryActive,
						(this.state.hovering) ? styles.buttonSecondaryHover : {},
						(this.state.pressed) ? styles.buttonSecondaryPressed : {},
						(this.props.fullWidth) ? styles.buttonFullWidth : {},
						styles.buttonLabel,
						(this.props.small) ? styles.smallButton : {},
					);
					break;
				case 'success':
					calcButtonStyle = classNames(
						styles.buttonSuccessActive,
						(this.state.hovering) ? styles.buttonSuccessHover : {},
						(this.state.pressed) ? styles.buttonSuccessPressed : {},
						(this.props.fullWidth) ? styles.buttonFullWidth : {},
						styles.buttonLabel,
						(this.props.small) ? styles.smallButton : {},
					);
					break;
				case 'warning':
					calcButtonStyle = classNames(
						styles.buttonWarningActive,
						(this.state.hovering) ? styles.buttonWarningHover : {},
						(this.state.pressed) ? styles.buttonWarningPressed : {},
						(this.props.fullWidth) ? styles.buttonFullWidth : {},
						styles.buttonLabel,
						(this.props.small) ? styles.smallButton : {},
					);
					break;
				case 'danger':
					calcButtonStyle = classNames(
						styles.buttonDangerActive,
						(this.state.hovering) ? styles.buttonDangerHover : {},
						(this.state.pressed) ? styles.buttonDangerPressed : {},
						(this.props.fullWidth) ? styles.buttonFullWidth : {},
						styles.buttonLabel,
						(this.props.small) ? styles.smallButton : {},
					);
					break;
				default:
					calcButtonStyle = classNames(
						styles.buttonPrimaryActive,
						(this.state.hovering) ? styles.buttonPrimaryHover : {},
						(this.state.pressed) ? styles.buttonPrimaryPressed : {},
						(this.props.fullWidth) ? styles.buttonFullWidth : {},
						styles.buttonLabel,
						(this.props.small) ? styles.smallButton : {},
					);
			}
		}

		return (
			<button
				className={calcButtonStyle}
				id={this.props.id}
				onMouseDown={this.nativeMouseDownHandler}
				onMouseUp={this.nativeMouseUpHandler}
				disabled={this.props.disabled || false}
				onMouseEnter={this.nativeMouseEnterHandler}
				onMouseLeave={this.nativeMouseLeaveHandler}
			>
				<span>
					{((this.props.fontAwesomeIcon) ? (
						<span>
							<FontAwesome
								name={`${this.props.fontAwesomeIcon}`}
								style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>
							&nbsp;
						</span>
						) : null)
					}

					{this.props.label}
				</span>
			</button>
		);
	}
}

export default HocButton;
