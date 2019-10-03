import React, { Component } from 'react'
import { Consumer } from '../../template-edit/templates - context/TemplateContext'

export class EditFormButton extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (dispatch, e) => {
        e.preventDefault();

        const property = e.target.name;
        const value = e.target.value;
        const selectedElement = this.props.selectedElement;
        console.log(`from edit ${property}`)
        console.log(`from edit ${value}`)
        console.log(`from edit ${selectedElement}`)


        dispatch({
            type: selectedElement,//selectedElement 
            payload: {
                property,
                value
            }
        })
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    const {
                        //bg styles
                        background,//boja bg colorpicker
                        border,//ima / nema 
                        borderThiknes,//border debljina input/slider
                        borderType,//select
                        borderColor,//colorpicker
                        borderRadius,//slider / input

                        //contentn i fonts sve kao kod txt forme
                        content,
                        fontSize,
                        fontType,
                        fontWeight,
                        color,
                        textTransform,
                        fontStyle,
                        textAlign,
                        textDecoration,

                        //box shadoww  
                        boxShadowColor, //colorpicker
                        //sve slider
                        boxShadowBlurRadius,
                        boxShadowSpreadRadius,
                        boxShadowHorizontal,
                        boxShadowVertical,
                    } = this.props.elementToEdit;
                    return (
                        <div className='editMode' >
                            <form onSubmit={this.handleSubmit} className='editMode-form'>
                                <div className="editMode-field">
                                    {/* font size */}
                                    <label htmlFor="fontSize">Font Size</label>
                                    <input
                                        type="text"
                                        name='fontSize'
                                        value={fontSize === '' ? '50px' : fontSize}
                                        onChange={this.handleChange.bind(this, dispatch)} />
                                </div>
                                <div className="editMode-field">
                                    {/* font size */}
                                    <label htmlFor="fontSize">Content</label>
                                    <input
                                        type="text"
                                        name='content'
                                        value={content}
                                        onChange={this.handleChange.bind(this, dispatch)} />
                                </div>


                                <div className="editMode-field">
                                    <label htmlFor="fontSize">Font Weight</label>
                                    <select
                                        name="fontWeight"
                                        onChange={this.handleChange.bind(this, dispatch)}>
                                        <option value="200">200</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="500">500</option>
                                        <option value="600">600</option>
                                        <option value="700">700</option>
                                        <option value="800">800</option>
                                        <option value="900">900</option>
                                    </select>
                                </div>
                                <div className="editMode-field">
                                    <label htmlFor="fontSize">Text Transform </label>
                                    <select
                                        name="textTransform"
                                        onChange={this.handleChange.bind(this, dispatch)}>
                                        <option value="default">Default</option>
                                        <option value="uppercase">Uppercase</option>
                                        <option value="lowercase">Lowercase</option>
                                        <option value="capitalize">Capitalize</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                                <div className="editMode-field">
                                    <label htmlFor="fontSize"> Font Style </label>
                                    <select
                                        name="fontStyle"
                                        onChange={this.handleChange.bind(this, dispatch)}>
                                        <option value="default">Default</option>
                                        <option value="normal">Normal</option>
                                        <option value="italic">Italic</option>
                                        <option value="oblique">Oblique</option>
                                    </select>
                                </div>
                                <div className="editMode-field">
                                    <label htmlFor="textDecoration">Text Decoration </label>
                                    <select
                                        name="textDecoration"
                                        onChange={this.handleChange.bind(this, dispatch)}>
                                        <option value="default">Default</option>
                                        <option value="underline">Underline</option>
                                        <option value="overline">Oveline</option>
                                        <option value="line-through">Line Throuth</option>
                                        <option value="underline overline">Underline Overline</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                                <div className="editMode-field">
                                    <label htmlFor="lineHeight">Line Height</label>
                                    <input
                                        type="range"
                                        name="lineHeight"
                                        min="1"
                                        max="5"
                                        step='0.1'
                                        value={lineHeight === '' ? 0 : lineHeight}
                                        onChange={this.handleChange.bind(this, dispatch)}></input>
                                    <p>{lineHeight === '' ? '1' : lineHeight}</p>

                                </div>
                                <div className="editMode-field">
                                    <label htmlFor="letterSpacing">Letter Spacing </label>
                                    <input
                                        type="range"
                                        name="letterSpacing"
                                        min="0"
                                        max="10"
                                        step='1'
                                        value={letterSpacing}
                                        onChange={this.handleChange.bind(this, dispatch)}></input>
                                    {/* p is input field whit value from state */}
                                    <p>{letterSpacing === '' ? '0' : letterSpacing}</p>

                                </div>
                                <div className="editMode-field">
                                    <label htmlFor="color">Font Color </label>
                                    {/* font color */}
                                    <input
                                        type="color"
                                        name="color"
                                        id="color"
                                        onChange={this.handleChange.bind(this, dispatch)} />
                                </div>
                            </form>
                            <p>{content}</p>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditFormButton