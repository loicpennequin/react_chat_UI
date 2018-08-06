import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormField.sass';

const FormField = ({ onChange, ...props }) => (
	<div styleName="form-field">
		<label styleName="label" htmlFor={'field-' + props.name}>
			{props.name}{' '}
		</label>
		<div styleName="input-wrapper">
			<input
				styleName="input"
				{...props}
				onChange={e => (onChange ? onChange(e) : null)}
				id={'field-' + props.name}
			/>
			<span />
		</div>
		{props.errors
			? props.errors.map((err, i) => (
					<div styleName="error" key={i}>
						<FontAwesomeIcon
							icon="exclamation-triangle"
							fixedWidth
						/>
						{err}
					</div>
			  ))
			: null}
	</div>
);

export default FormField;
