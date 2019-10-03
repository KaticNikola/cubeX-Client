import React, { Component } from 'react'

export class FormSelectField extends Component {


    redenderOptions = (options) => {
        let [ value, label ] = options
        return (
            options.forEach(option => {
               return <option value={value}>{label}</option>
            })
        )
    }
    render() {
        const { name, className, label, onChange, value, options } = this.props

        return (
            <div className={className}>
                <label htmlFor={name}>{label}</label>
                <select
                    name={name}
                    onChange={onChange}
                    value={value}
                >
                    <this.redenderOptions props={options}/>

                </select>



            </div>
        )
    }
}

export default FormSelectField
