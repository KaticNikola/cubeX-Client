import React, { Component } from 'react'

export class FormSelectField extends Component {


    render() {
        const { name, className, label, onChange, value, options } = this.props;
        {
            return (
                <div className={className}>
                    <label htmlFor={name}>{label}</label>
                    <select
                        name={name}
                        onChange={onChange}
                        value={value}
                        options={options}
                    >
                       {options.map( option =>{
                           return(
                            <option key ={option.value} value={option.value}>{option.label}</option>
                           )
                       })}

                    </select>
                </div>
            )
        }
    }
}

export default FormSelectField
