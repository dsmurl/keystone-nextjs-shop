import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';

/**
 *
 *
 *      JsonViewerComponent
 *
 *
 */

class JsonViewerComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

	static propTypes = {
		targetJson: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.object]),
		jsonTitle: PropTypes.string.isRequired,
	};


	/**
	 *
	 *
	 *      Internal Business Logic Methods
	 *
	 *
	 */

	syntaxHighlight(passedJson) {
		let json = passedJson;
		if (typeof json !== 'string') {
			json = JSON.stringify(json, undefined, 2);
		}
		json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
			let cls = 'number';
			let stl = 'darkorange';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
					stl = 'red';
				} else {
					cls = 'string';
					stl = 'green';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
				stl = 'blue';
			} else if (/null/.test(match)) {
				cls = 'null';
				stl = 'magenta';
			}

			return `<span class="${cls}" style="color: ${stl}">${match}</span>`;
		});
	}


	/**
	 *
	 *
	 *      Main Render Method
	 *
	 *
	 */

	render = () => {
		const targetJson = this.props.targetJson;

		return (targetJson) ? (
			<div className={styles.ccJsonViewerComponent}>
				{`${this.props.jsonTitle}:`}
				<pre dangerouslySetInnerHTML={{__html: this.syntaxHighlight(JSON.stringify(targetJson, null, 4))}}/>
			</div>
		) : null
	}
}

export default JsonViewerComponent;
