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
	handleBtnState = (e) => {

		console.log(e.target.className)
		// let displayedElement = '';
		if (e.target.className === 'hover') {
			this.setState({
				btnState: 'hover'
			})
			//console.log(displayedElement)
		} else {
			this.setState({
				btnState: 'normal'
			})
		}
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

											<div className="normal"
												onClick={this.handleBtnState.bind(btnState)}>
												<h2>Normal</h2>
											</div>

											<div className="hover"
												onClick={this.handleBtnState.bind(btnState)}>
												<h2>hover</h2>
											</div>

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
												value={borderThiknes === '' ? '50px' : borderThiknes}
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

											

										</div>
										<div className="editOptions-form_style--hover"
											style={{ display: btnState === 'hover' ? "block" : "none" }}>
											forma za hover state

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