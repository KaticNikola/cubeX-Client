import React, { Component } from 'react'

import { Consumer } from '../../../templates - context/TemplateContext';

import SecondaryTitle from '../../../../../components/text-components/SecondaryTitle'
import Description from '../../../../../components/text-components/Description'
import Button from '../../../../../components/buttons-components/button'
import FormInputField from '../../../../../components/form-inputs-components/FormInputFeld'

import { SELECTED_ELEMENT } from '../../../templates - context/TemplateTypes'

export class Footer extends Component {

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
					const { title, description, navigation1, navigation2 } = value.footer;
					return (
						<div className='footer column80'>
							<div className="footer-txt">
								<div
									onClick={this.handleSelectElement.bind(this, dispatch)}
									className="footer-txt_title">
									<SecondaryTitle {...title} />
								</div>
								<div
									onClick={this.handleSelectElement.bind(this, dispatch)}
									className="footer-txt_description">
									<Description {...description} />
								</div>
							</div>
							<div className="footer-company">
								<div className="footer-company_title">
									<SecondaryTitle {...navigation1.title} />
								</div>
								<div className="footer-company_links">
									<ul>
										<li className="footer-company_link-item">
											<a href="#">Home</a>
										</li>
										<li className="footer-company_link-item">
											<a href="#">About</a>
										</li>
										<li className="footer-company_link-item">
											<a href="#">Testimonials</a>
										</li>
										<li className="footer-company_link-item">
											<a href="#">Services</a>
										</li>
										<li className="footer-company_link-item">
											<a href="#">Contact</a>
										</li>
									</ul>
								</div>

							</div>
							<div className="footer-services">
								<div className="footer-services_title">
									<SecondaryTitle {...navigation2.title} />
								</div>
								<div className="footer-services_links">
									<ul>
										<li className="footer-services_link-item">
											<a href="#"> Primary Care</a>
										</li>
										<li className="footer-services_link-item">
											<a href="#">Pharmacy</a>
										</li>
										<li className="footer-services_link-item">
											<a href="#">Emergency</a>
										</li>
										<li className="footer-services_link-item">
											<a href="#">Pediatrics</a>
										</li>
										<li className="footer-services_link-item">
											<a href="#">Urgent Care</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="footer-subscribe">
								<div className="footer-subscribe_title">
									<SecondaryTitle title="SUBSCRIBE" />
								</div>
								<div className="footer-subscribe_form">
									<div className="footer-subscribe_input">
										<FormInputField
											type="email"
											name='email'
											placeholder="Email"
										/>
									</div>

									<div className="footer-subscribe_btn btn-hover-green">
										<Button content="Send" />
									</div>
								</div>
							</div>

						</div>
					)
				}
				}
			</Consumer>

		)

	}
}

export default Footer
