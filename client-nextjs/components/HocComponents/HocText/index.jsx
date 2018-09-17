import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';


/**
 *
 *
 *      HocText
 *
 *
 */

class HocText extends React.Component {  // eslint-disable-line

	static propTypes = {
		// Attribute props
		value: PropTypes.string,
		name: PropTypes.string,

		onChange: PropTypes.func,
		onBlur: PropTypes.func,
		onFocus: PropTypes.func,

		errorText: PropTypes.string,
		labelText: PropTypes.string,
		placeholder: PropTypes.string,
		noBorder: PropTypes.bool,

		fullWidth: PropTypes.bool,
		multiLine: PropTypes.bool,
		disabled: PropTypes.bool,
	};

	getBlanksState = () => ({
		focused: false,
	});

	constructor(props) {
		super(props);

		this.state = this.getBlanksState();
	};


	/**
	 *
	 *
	 *      Form Component Methods
	 *
	 *
	 */

	validateThis = () => {
		const validations = {};

		// this.sourceStubList.map((sourceStub) => {
		//   Object.assign(validations, this.sourceReferences[sourceStub.key].validateThis());
		// });

		return validations;
	};

	gatherComponentState = () => {
		return this.state;
	};

	resetComponentState = () => {
		this.setState(this.getBlanksState());
	};


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


	onFocus = (e) => {
		if (this.props.onFocus) {
			this.props.onFocus(e);
		}

		this.setState({
			focused: true,
		});
	};

	onBlur = (e) => {
		if (this.props.onBlur) {
			this.props.onBlur(e);
		}

		this.setState({
			focused: false,
		});
	};

	/**
	 *
	 *
	 *      Alt Render Methods
	 *
	 *
	 */

	potentiallyRenderError = () => {
		if (this.props.errorText && (this.props.errorText !== '')) {
			return (
				<div className={styles.errorText}>
					{this.props.errorText}
				</div>
			);
		}

		return null;
	};

	potentiallyRenderLabel = () => {
		const calcStyle = classNames(
			styles.labelText,
			(this.props.errorText) ? styles.errorText : {},
		);

		if (this.props.labelText && (this.props.labelText !== '')) {
			return (
				<div className={calcStyle}>
					<h3>{this.props.labelText}</h3>
				</div>
			);
		}

		return null;
	};

	/**
	 *
	 *
	 *      Main Render Method
	 *
	 *
	 */

	render() {
		const calcedStyle = classNames(
			((this.props.multiLine) ? styles.multiLine : styles.singleLine),
			((this.props.fullWidth) ? styles.fullWidth : {}),
			((this.props.errorText && this.props.errorText !== '') ? styles.errorStyle : {}),
			(this.state.focused) ? styles.focusedStyle : {},
			(this.props.disabled) ? styles.disabledStyle : {},
			(this.props.noBorder) ? styles.noBorder : {},
		);

		return (
			<div className={styles.hocText}>
				{this.potentiallyRenderLabel()}

				{ (this.props.multiLine) ?
					(
						<textarea
							className={calcedStyle}
							placeholder={(this.props.placeholder) ? this.props.placeholder : ""}
							value={this.props.value}
							onChange={(this.props.onChange) ? (e) => (this.props.onChange(e.target.value)) : (() => (null))}
							onBlur={this.onBlur}
							onFocus={this.onFocus}
							rows="3"
							disabled={this.props.disabled}
						/>
					) : (
						<input
							className={calcedStyle}
							placeholder={(this.props.placeholder) ? this.props.placeholder : ""}
							value={this.props.value}
							onChange={(this.props.onChange) ? (e) => (this.props.onChange(e.target.value)) : (() => (null))}
							onBlur={this.onBlur}
							onFocus={this.onFocus}
							disabled={this.props.disabled}
						/>
					)
				}

				{this.potentiallyRenderError()}
			</div>
		);
	}
}

export default HocText;
