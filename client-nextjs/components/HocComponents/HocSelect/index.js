import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';


/**
 *
 *
 *      HocSelect
 *
 *
 */

class HocSelect extends React.Component {  // eslint-disable-line

	static propTypes = {
		selectEntries: PropTypes.array.isRequired,
		maxHeight: PropTypes.number,

		name: PropTypes.string.isRequired,
		onChangeHandler: PropTypes.func.isRequired,

		hintText: PropTypes.string,
		errorText: PropTypes.string,
		labelText: PropTypes.string,
		noneText: PropTypes.string,

		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number]),
		fullWidth: PropTypes.bool,
		disabled: PropTypes.bool,
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


	/**
	 *
	 *
	 *      Alt Render Methods
	 *
	 *
	 */

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

	potentiallyRenderError = () => {
		if (this.props.errorText && (this.props.errorText.trim() !== '')) {
			return (
				<div className={styles.errorText}>
					{this.props.errorText}
				</div>
			);
		}

		return null;
	};

	createMenuItem = (entry) => {
		return (
			<option
				className={styles.menuItem}
				key={`select_option_${this.props.name}_${entry.value}`}
				value={entry.value}
			>
				{entry.label}
			</option>
		);
	};


	/**
	 *
	 *
	 *      Main Render Method
	 *
	 *
	 */

	render() {
		let componentStyle = classNames(
			styles.thisComponent,
			(this.props.fullWidth) ? styles.fullWidth : {},
		);


		let selectStyle = classNames(
			styles.hocSelect,
			((!this.props.errorText) ||
			(this.props.errorText === null) ||
			(this.props.errorText === '')) ? styles.normalBox : styles.errorStyle
		);

		return (
			<span className={componentStyle}>

				{this.potentiallyRenderLabel()}

				<select
					className={selectStyle}
					name={this.props.name}
					onChange={(e) => {
						if (this.props.selectEntries[0] && (typeof (this.props.selectEntries[0].value) === "number")) {
							this.props.onChangeHandler(parseFloat(e.target.value));
						} else {
							this.props.onChangeHandler(e.target.value);
						}
					}}
					value={this.props.value}
				>
					{(this.props.hintText) ? (<option className={styles.menuItem} value=''
					                                  disabled>{this.props.hintText}</option>) : null} // Possibly
					render a hint text option
					{(this.props.noneText) ? (
							<option className={styles.menuItem} value=''>{this.props.noneText}</option>) : null} //
					Possibly render a None option

					{this.props.selectEntries.map((entry) => ( this.createMenuItem(entry) ))}
				</select>

				{this.potentiallyRenderError()}

			</span>
		);
	}
}

export default HocSelect;
