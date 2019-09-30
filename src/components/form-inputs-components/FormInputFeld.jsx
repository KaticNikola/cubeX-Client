import React, { Component } from 'react'

export class FormInputField extends Component {
    render() {
        const { type, name, placeholder, onChange, error, value, inputStyle} = this.props;
        return (
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                error={error}
                style={ inputStyle }
                className = 'fromInputItem'
            />
        )
    }
}

export default FormInputField
