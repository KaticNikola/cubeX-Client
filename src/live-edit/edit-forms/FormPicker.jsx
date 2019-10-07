//editforms trba na osnovu propsa da odredi koju ce formu da renderujeimport React from 'react'
import React from 'react';
import { Consumer } from '../template-edit/templates - context/TemplateContext'

//sredi importe
import EditFormText from './forms/EditFormText'
import EditFormButton from './forms/EditFormButton'

import "./FormPicker.scss"

export class EditMode extends React.Component {


	render() {
		let elementToEdit = null;
		let formTypeControler = null;
		return (
			<Consumer>
				{value => {
					const { selectedElement, editMode } = value;
					// let elementToEdit = value.header.title;
					//umesto if probas sa swithc
					if (selectedElement === 'headerTitle') {
						elementToEdit = value.header.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'headerDescription') {
						elementToEdit = value.header.description;
						formTypeControler = 'text'
					}
					//offers
					else if (selectedElement === 'offersTitle') {
						elementToEdit = value.offers.title;
						formTypeControler = 'text'
					}
					//boxies
					else if (selectedElement === 'boxiesTitle') {
						elementToEdit = value.boxies.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesDescription') {
						elementToEdit = value.boxies.description;
						formTypeControler = 'text'
					}
					//contact
					else if (selectedElement === 'contactTitle') {
						elementToEdit = value.contact.title;
						formTypeControler = 'text'
					}
					//getstarted
					else if (selectedElement === 'getStartedTitle') {
						elementToEdit = value.getStarted.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'getStartedDescription') {
						elementToEdit = value.getStarted.description;
						formTypeControler = 'text'
					}
					//footer
					else if (selectedElement === 'footerTitle') {
						elementToEdit = value.footer.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'footerDescription') {
						elementToEdit = value.footer.description;
						formTypeControler = 'text'
					}else if (selectedElement === 'headerBtnLeft') {
						elementToEdit = value.header.buttonLeft;
						formTypeControler = 'button'
					}
					else if (selectedElement === 'headerBtnRight') {
						elementToEdit = value.header.buttonRight;
						formTypeControler = 'button'
					}
					//render froms
					if (editMode === 'on' &&  selectedElement === '') {
						return (
							<div className="emptyForm">
								<h3>please select element you want to edit</h3>
							</div>

						)
					} else if (editMode === 'on' && formTypeControler === 'text') {
						return (
							<div className="editMode">
								<EditFormText
									selectedElement={selectedElement}
									elementToEdit={elementToEdit} />
							</div>
						)
					} else if (editMode === 'on' && formTypeControler === 'button') {
						return (
							<div className="editMode">
								<EditFormButton
									selectedElement={selectedElement}
									elementToEdit={elementToEdit} />
							</div>
						)
					}


				}}
			</Consumer>
		)


	}
}

export default EditMode
