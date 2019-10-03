import React, { Component } from 'react'

export class FormInputField extends Component {
    render() {
        const { type, name, placeholder, onChange, error, value, label, className, min, max, step } = this.props;
        return (

            <div className={className}>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    placeholder={placeholder}
                    onChange={onChange}
                />

            </div>

            // <input
            //     type={type}
            //     name={name}
            //     placeholder={placeholder}
            //     value={value}
            //     onChange={onChange}
            //     error={error}
            //     style={inputStyle}

            // />
        )
    }
}

export default FormInputField
