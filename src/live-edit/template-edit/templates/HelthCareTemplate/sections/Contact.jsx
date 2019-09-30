import React, { Component } from 'react'

import { Consumer } from '../../../templates - context/TemplateContext';

import SecondaryTitle from '../../../../../components/text-components/SecondaryTitle'
import Button from '../../../../../components/buttons-components/button'
import FormInputField from '../../../../../components/form-inputs-components/FormInputFeld'

import { SELECTED_ELEMENT } from '../../../templates - context/TemplateTypes'


export class Contact extends Component {

	handleSelectElement = (dispatch, e) => {
		let id = e.target.id
		let actionType = e.target.name
		//
		console.log(id)
		console.log(actionType)
		dispatch({
			type: SELECTED_ELEMENT,
			payload: {
				id,
				// selectionKey
			}
		})
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					const { title, button } = value.contact;
					return (
						<div className='contact column80'>
							<div 	
							onClick={this.handleSelectElement.bind(this, dispatch)}
							className="contact-title">
								<SecondaryTitle {...title} />
							</div>
							<div className="contact-form column60">
								<div className="contact-form_input">
									<FormInputField
										type="name"
										name='name'
										placeholder="Name"
									/>
								</div>
								<div className="contact-form_input">
									<FormInputField
										type="email"
										name='email'
										placeholder="Email"
									/>
								</div>
								<div className="contact-form_btn btn-hover-green">
									<Button {...button} />
								</div>
							</div>
						</div>
					)
				}}
			</Consumer>

		)




	}
}

export default Contact
