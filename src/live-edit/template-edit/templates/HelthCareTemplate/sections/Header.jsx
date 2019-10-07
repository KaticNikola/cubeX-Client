import React, { Component } from 'react'

import { Consumer } from '../../../templates - context/TemplateContext';

import MainTitle from '../../../../../components/text-components/MainTitle'
import Description from '../../../../../components/text-components/Description'

import Button from '../../../../../components/buttons-components/button'
import Video from '../../../../../components/video-components/Video'
import SVGHeader from '../../../../../components/SVG-components/SVGHeader'


import { SELECTED_ELEMENT } from '../../../templates - context/TemplateTypes'



export class Header extends Component {


	handleSelectElement = (dispatch, e) => {
		let id = e.target.id
		let actionType = e.target.name
		//
		console.log(`id${id}`)
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
					const { title, description, buttonLeft, buttonRight } = value.header;
					return (
						<div className="header" style={{ clipPath: 'url(#svgPath)' }}>
							<div className="content column70">
								<div className="header-text column50">
									<div
										onClick={this.handleSelectElement.bind(this, dispatch)}
										className="header-text_main-title">
										<MainTitle
											{...title} />
									</div>
									<div
										onClick={this.handleSelectElement.bind(this, dispatch)}
										className="header-text_description">
										<Description {...description} />
									</div>
									<div className="header-text_button"
										onClick={this.handleSelectElement.bind(this, dispatch)}>
										<div className="btn-green">
											<Button {...buttonLeft} />
										</div>
										<div className="btn-transparent"
											onClick={this.handleSelectElement.bind(this, dispatch)}>
											<Button {...buttonRight} />
										</div>

									</div>
								</div>
								<div className="header-video column50">
									<Video />
								</div>
							</div>

							<div className="header-svg">
								<SVGHeader />
							</div>
						</div>
					)
				}}
			</Consumer>
		)

	}
}

export default Header
