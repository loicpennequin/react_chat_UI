import React, { Component } from 'react';
import FormField from './FormField/FormField.jsx';
import './Form.sass';

class Form extends Component {
	static Field = FormField;

	constructor(props) {
		super(props);
		this.state = {
			values: this.props.fields.reduce(
				(acc, field) =>
					Object.assign(acc, {
						[field.name]: this.getDefaultValue(field)
					}),
				{}
			)
		};
	}

	getDefaultValue(field) {
		if (field.value) {
			return field.value;
		} else {
			return '';
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.values);
	}

	handleChange(e) {
		this.setState({
			values: Object.assign(this.state.values, {
				[e.target.getAttribute('name')]: e.target.value
			})
		});
	}

	isValid() {
		const hasEmptyField = Object.values(this.state.values).some(
			val => val.length <= 0
		);

		if (this.props.validateFn) {
			return this.props.validateFn(this.state.values) && !hasEmptyField;
		} else {
			return !hasEmptyField;
		}
	}

	render() {
		const defaultTemplate = (
			<React.Fragment>
				{this.props.fields.map(field => (
					<FormField
						key={'field-' + field.name}
						value={this.state.values[field.name]}
						onChange={e => this.handleChange(e)}
						{...field}
					/>
				))}
				<input
					styleName="btn-submit"
					type="submit"
					value={this.props.submitMessage}
					disabled={!this.isValid()}
				/>
			</React.Fragment>
		);

		return (
			<form
				styleName="form"
				noValidate
				autoComplete="off"
				onSubmit={e => this.handleSubmit(e)}
			>
				{this.props.children ? this.props.children() : defaultTemplate}
			</form>
		);
	}
}

export default Form;
