import React, { Component } from 'react'
import { Consumer } from '../../template-edit/templates - context/TemplateContext'

import Icon from '../../../components/icon-components/Icon'


import FormTextAreaField from '../../../components/form-inputs-components/FormTextAreaField'
import FormInputField from '../../../components/form-inputs-components/FormInputFeld'
import FormSelectField from '../../../components/form-inputs-components/FormSelectField'

import './EditFormText.scss'

export class EditFormButton extends Component {
	state = {
		displayedElement: '',
		btnState: ''
	}
	handleSubmit = (e) => {
		e.preventDefault()
	}

	handleChageGroup = (e) => {

		console.log(e.target.className)
		// let displayedElement = '';
		if (e.target.className === 'formWrapper-header_style') {
			this.setState({
				displayedElement: 'style'
			})
			//console.log(displayedElement)
		} else if (e.target.className === 'formWrapper-header_advanced') {
			this.setState({
				displayedElement: 'advanced'
			})
		} else if(e.target.className === 'formWrapper-header_content') {
			this.setState({
				displayedElement: 'content'
			})
		}
	}

	handleBtnState = (e) => {

		console.log(e.target.className)
		let displayedElement = '';
		if (e.target.className === 'hover') {
			displayedElement = 'hover'
			// this.setState({
			// 	btnState: 'hover'
			// })
			//console.log(displayedElement)
		} else if(e.target.className === 'normal') {
			displayedElement = 'normal'
			// this.setState({
			// 	btnState: 'normal'
			// })
		}
		console.log(displayedElement)
		this.setState({
				btnState: displayedElement
			})
		
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
		let { displayedElement, btnState } = this.state;
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
						<div className="formWrapper">
							<div className="formWrapper-header">
								<button  
									className="formWrapper-header_content"
									onClick={this.handleChageGroup}
									style={{ backgroundColor: displayedElement === 'content' ? "rgb(58, 58, 58)" : " rgb(0, 0, 0)" }}>
										Content
								</button>
								<button onClick={this.handleChageGroup}
									className="formWrapper-header_style"
									style={{ backgroundColor: displayedElement === 'style' ? "rgb(58, 58, 58)" : " rgb(0, 0, 0)" }}>
										Style
									{/* <h4 className="style">Style</h4> */}
								</button>
								<button onClick={this.handleChageGroup}
									className="formWrapper-header_advanced"
									style={{ backgroundColor: displayedElement === 'advanced' ? "rgb(58, 58, 58)" : " rgb(0, 0, 0)" }}>
										Advanced
									{/* <h4 className="advanced" >Advanced</h4> */}
								</button>
							</div>

							<div className="editOptions">
								<div className="editOptions-form"
									onSubmit={this.handleSubmit}>
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
										<div className="editOptions-form_style-header">
											<button className="normal"
												onClick={this.handleBtnState.bind(btnState)}>
												Normal
											</button>
											<button className="hover"
												onClick={this.handleBtnState.bind(btnState)}>
												hover
											</button>
										</div>

										<div className="editOptions-form_style--normal"
											style={{ display: btnState === 'normal' ? "block" : "none" }}>

											{/* bg /border  */}
											<FormInputField
												className='style-field'
												label="background Color"
												type="color"
												name='background'
												onChange={this.handleChange.bind(this, dispatch)}
											/>
											<FormInputField
												className='style-field'
												label="Border Thiknes"
												type="text"
												name='borderThiknes'
												value={borderThiknes}
												onChange={this.handleChange.bind(this, dispatch)}
											/>
											<FormSelectField
												className='style-field'
												label='Border Type'
												name='borderType'
												onChange={this.handleChange.bind(this, dispatch)}
												options={[
													{ value: "solid", label: "solid" },
													{ value: "dotted", label: "dotted" },
													{ value: "dashed", label: "dashed" },
													{ value: "double", label: "double" },
													{ value: "groove", label: "groove" },
													{ value: "ridge", label: "ridge" },
													{ value: "inset", label: "inset" },
													{ value: "outset", label: "outset" },
													{ value: "none", label: "none" },
													{ value: "hidden", label: "hidden" },
												]} />

											<FormInputField
												className='style-field'
												label="Border Color"
												type="color"
												name='borderColor'
												value={borderColor}
												onChange={this.handleChange.bind(this, dispatch)}
											/>
											<FormInputField
												className='style-field'
												label="Border Radius"
												type="range"
												name='borderRadius'
												min="0"
												max="200"
												step='1'
												value={borderRadius === '' ? 0 : borderRadius}
												onChange={this.handleChange.bind(this, dispatch)}
											/>
											<p>{borderRadius === '' ? '0' : borderRadius}</p>


											{/* fonts   */}
											<FormInputField
												className='style-field'
												label="Font Size"
												type="text"
												name='fontSize'
												value={fontSize}
												onChange={this.handleChange.bind(this, dispatch)}
											/>
											<FormSelectField
												className='style-field'
												label='Font Weight'
												name='fontWeight'
												onChange={this.handleChange.bind(this, dispatch)}
												options={[
													{ value: "100", label: 100 },
													{ value: "300", label: 300 },
													{ value: "400", label: 400 },
													{ value: "500", label: 500 },
													{ value: "600", label: 600 },
													{ value: "700", label: 700 },
													{ value: "800", label: 800 },
													{ value: "900", label: 900 },
												]} />
											<FormSelectField
												className='style-field'
												label='Text Transform'
												name='textTransform'
												onChange={this.handleChange.bind(this, dispatch)}
												options={[
													{ value: "default", label: "Default" },
													{ value: "uppercase", label: "Uppercase" },
													{ value: "lowercase", label: "Lowercase" },
													{ value: "capitalize", label: "Capitalize" },
													{ value: "none", label: "None" },
												]} />

											<FormSelectField
												className='style-field'
												label=' Font Style '
												name='fontSize'
												onChange={this.handleChange.bind(this, dispatch)}
												options={[
													{ value: "default", label: "Default" },
													{ value: "normal", label: "Normal" },
													{ value: "italic", label: "Italic" },
													{ value: "oblique", label: "Oblique" },
													{ value: "none", label: "None" },
												]} />

											<FormSelectField
												className='style-field'
												label='Text Decoration'
												name='textDecoration'
												onChange={this.handleChange.bind(this, dispatch)}
												options={[
													{ value: "default", label: "Default" },
													{ value: "underline", label: "Underline" },
													{ value: "overline", label: "Oveline" },
													{ value: "line-through", label: "Line Throuth" },
													{ value: "underline overline", label: "Underline Overline" },
													{ value: "none", label: "None" },
												]} />
											<FormInputField
												className='style-field'
												label="Font Color"
												type="color"
												name='color'
												onChange={this.handleChange.bind(this, dispatch)}
											/>
										</div>

										<div className="editOptions-form_style--hover"
											style={{ display: btnState === 'hover' ? "block" : "none" }}>
												hover
												

										</div>



									</div>
								</div>
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
				}}
			</Consumer>
		)
	}
}

export default EditFormButton