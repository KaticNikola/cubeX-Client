import React, { Component } from 'react'
import { Consumer } from '../../template-edit/templates - context/TemplateContext'

import Icon from '../../../components/icon-components/Icon'


import FormTextAreaField from '../../../components/form-inputs-components/FormTextAreaField'
import FormInputField from '../../../components/form-inputs-components/FormInputFeld'
//import FormSelectField from '../../../components/form-inputs-components/FormSelectField'

import './EditFormText.scss'


export class EditFormText extends Component {
	state = {
		displayedElement: '',
	}
	handleChageGroup = (e) => {

		console.log(e.target.className)
		// let displayedElement = '';
		if (e.target.className === 'style') {
			this.setState({
				displayedElement: 'style'
			})
			//console.log(displayedElement)
		} else if (e.target.className === 'advanced') {
			this.setState({
				displayedElement: 'advanced'
			})
		} else {
			this.setState({
				displayedElement: 'content'
			})
		}
	}

	handleViewChange = e => {
		//odredjuje view pc / tablet / tel  imaces classe za to 
		console.log(`from handleViewChange `)

	}

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
	// style = {
	//     display: "block",
	//     backgroundColor: "rgb(58, 58, 58)"
	// }
	render() {
		let { displayedElement } = this.state;
		const options=[	
			{value: '200', label: 200 },
			{value: '300', label: 300 },
			{value: '400', label: 400 },
			{value: '500', label: 500 },
			{value: '600', label: 600 },


		]
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					const { content, fontSize, lineHeight, letterSpacing } = this.props.elementToEdit;

					return (
						<div className="formWrapper">
							<div className="formWrapper-header">
								<div onClick={this.handleChageGroup.bind(displayedElement)}
									className="formWrapper-header_content"
									style={{ backgroundColor: displayedElement === 'content' ? "rgb(58, 58, 58)" : " rgb(0, 0, 0)" }}>

									<h4 className="content">Content</h4>

								</div>
								<div onClick={this.handleChageGroup}
									className="formWrapper-header_style"
									style={{ backgroundColor: displayedElement === 'style' ? "rgb(58, 58, 58)" : " rgb(0, 0, 0)" }}>

									<h4 className="style">Style</h4>
								</div>
								<div onClick={this.handleChageGroup}
									className="formWrapper-header_advanced"
									style={{ backgroundColor: displayedElement === 'advanced' ? "rgb(58, 58, 58)" : " rgb(0, 0, 0)" }}>

									<h4 className="advanced" >Advanced</h4>
								</div>
							</div>


							<div className="editOptions">
								<form
									onSubmit={this.handleSubmit} className="editOptions-form">

									<div className="editOptions-form_content"
										style={{ display: displayedElement === 'content' ? "block" : "none" }}>
										<FormTextAreaField
											label='Content'
											className='content-field'
											name='content'
											row='70'
											cols='80'
											value={content}
											onChange={this.handleChange.bind(this, dispatch)}


										/>
									</div>

									<div className="editOptions-form_style"
										style={{ display: displayedElement === 'style' ? "block" : "none" }}>
										<FormInputField
											className='style-field'
											label="Font Size"
											type="text"
											name='fontSize'
											value={fontSize === '' ? '50px' : fontSize}
											onChange={this.handleChange.bind(this, dispatch)}
										/>

										{/* <FormSelectField 
										className='style-field'
										label='Font Weight'
										name='fontWeight'
										onChange={this.handleChange.bind(this, dispatch)}
									
										/> */}





										<div className="style-field">
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

										<div className="style-field">
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

										<div className="style-field">
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
										<div className="style-field">
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
										<FormInputField
											className='style-field'
											label="Line Height"
											type="range"
											name='lineHeight'
											min="0"
											max="5"
											step='0.1'
											value={lineHeight === '' ? 0 : lineHeight}
											onChange={this.handleChange.bind(this, dispatch)}
										/>
										<p>{lineHeight === '' ? '0' : lineHeight}</p>

										<FormInputField
											className='style-field'
											label="Letter Spacing"
											type="range"
											name='letterSpacing'
											min="0"
											max="10"
											step='1'
											value={letterSpacing === '' ? 0 : letterSpacing}
											onChange={this.handleChange.bind(this, dispatch)}
										/>
										<p>{letterSpacing === '' ? '0' : letterSpacing}</p>


										<FormInputField
											className='style-field'
											label="Font Color"
											type="color"
											name='color'
											onChange={this.handleChange.bind(this, dispatch)}
										/>
									</div>

									<div
										style={{ display: displayedElement === 'advanced' ? "block" : "none" }}
										className="form-advanced">
									</div>
								</form>
							</div>

							<div className="formWrapper-footer">
								<div
									onClick={this.handleViewChange}
									className="formWrapper-footer_pc">
									<Icon icon='fas fa-desktop' />

								</div>
								<div
									onClick={this.handleViewChange}
									className="formWrapper-footer_tablet">
									<Icon icon='fas fa-tablet-alt' />
								</div>
								<div
									onClick={this.handleViewChange}
									className="formWrapper-footer_phone">
									<Icon icon='fas fa-mobile-alt' />
								</div>
							</div>
						</div>
					)
				}
				}
			</Consumer >
		)
	}
}
export default EditFormText