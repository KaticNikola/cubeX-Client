import React, { Component } from 'react'

import { Consumer } from '../template-edit/templates - context/TemplateContext'
import Icon from '../../components/icon-components/Icon'

import './EditModeConroler.scss'

export class EditModeConroler extends Component {

	handleEditModeControler = (dispatch, e) => {
		let editModeState = '';
		if(e.target.className === 'fas fa-chevron-left'){
			editModeState = 'on';
		} else{
			editModeState = 'off';
		}

	//	console.log('from template edit')
		dispatch({
			type: "EDITMODE_CONTROLER",
			payload: editModeState
		})
	}
	render() {
		return (
			<Consumer>
				{value => {
					let { editMode, dispatch } = value;
					return (
						<div
							onClick={this.handleEditModeControler.bind(this, dispatch)}
							className={editMode === "on" ?
								"editModeConrolerOn" :
								"editModeConrolerOff"}>
							{editMode === 'on' ?
								<Icon icon='fas fa-chevron-right' /> :
								<Icon icon='fas fa-chevron-left' />}

						</div>
					)
				}}

			</Consumer>
		)
	}
}

export default EditModeConroler
//reneruje btn koji konrolise state > Editmode