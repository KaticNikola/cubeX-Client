import React, { Component } from 'react'

import { Consumer } from '../../../templates - context/TemplateContext';

import SecondaryTitle from '../../../../../components/text-components/SecondaryTitle'
import Description from '../../../../../components/text-components/Description'
import Button from '../../../../../components/buttons-components/button'
import Icon from '../../../../../components/icon-components/Icon'

import { SELECTED_ELEMENT } from '../../../templates - context/TemplateTypes'


export class Offers extends Component {

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
					const { title, card1, card2, card3, card4 } = value.offers;
					return (
						<div className='offers'>
							<div className="content column80">
								<div 
									onClick={this.handleSelectElement.bind(this, dispatch)}
									className="title">
									<SecondaryTitle {...title} />
								</div>
								<div className="cards">
									<div className="card column23">
										<div className="card-icon">
											<Icon {...card1.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card1.title} />
										</div>
										<div className="card-description">
											<Description {...card1.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>

									<div className="card column23">
										<div className="card-icon">
											<Icon {...card2.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card2.title} />
										</div>
										<div className="card-description">
											<Description {...card2.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>

									<div className="card column23">
										<div className="card-icon">
											<Icon {...card3.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card3.title} />
										</div>
										<div className="card-description">
											<Description {...card3.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>

									<div className="card column23">
										<div className="card-icon">
											<Icon {...card4.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card4.title} />
										</div>
										<div className="card-description">
											<Description {...card4.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>
								</div>

							</div>
						</div>
					)
				}}
			</Consumer>

		)
	}
}

export default Offers
