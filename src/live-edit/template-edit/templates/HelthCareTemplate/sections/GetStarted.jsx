import React, { Component } from 'react'

import { Consumer } from '../../../templates - context/TemplateContext';

import SecondaryTitle from '../../../../../components/text-components/SecondaryTitle'
import Description from '../../../../../components/text-components/Description'
import Button from '../../../../../components/buttons-components/button'

import { SELECTED_ELEMENT } from '../../../templates - context/TemplateTypes'

export class GetStarted extends Component {

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
					const { title, description, button } = value.getStarted;
					return (
						<div className="getStarted">
							<div className="getStarted-txt">
								<div 
									onClick={this.handleSelectElement.bind(this, dispatch)}
									className="getStarted-txt_title">
									<SecondaryTitle {...title} />
								</div>
								<div 
									onClick={this.handleSelectElement.bind(this, dispatch)}
									className="getStarted-txt_description">
									<Description {...description} />
								</div>

							</div>
							<div className="getStarted-btn btn-white">
								<Button {...button} />
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default GetStarted;
