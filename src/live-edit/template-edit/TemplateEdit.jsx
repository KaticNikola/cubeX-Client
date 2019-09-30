//treba da renderuje template i formu

//promeni classe
//i prepovezis sve 
import React, { Component } from 'react'


//template je drugi
import HelthCareTemplate from './templates/HelthCareTemplate/HelthCareTemplate'
//ovde je formchuser ili slicno 
import FormPicker from '../edit-forms/FormPicker'
import EditModeControler from '../editMode-controler/EditModeConroler'

import { Consumer } from './templates - context/TemplateContext'

import "./TemplateEdit.scss"

export class TemplateEdit extends Component {
    // handleEditModeControler = (dispatch) => {
    //     console.log('from template edit')
    //     dispatch({
    //         type: "EDITMODE_CONTROLER",
    //         payload: 'on'
    //     })
    // }
    render() {
        return (
            <Consumer>
                {value => {
                    const { selectedElement, dispatch, editMode } = value;
                    if (editMode === 'on') {
                        return (
                            <div className='templateEdit'>
                                <div className="templateEdit-template">
                                    <HelthCareTemplate />
                                </div>
                                <div className="templateEdit-edit">
                                    <FormPicker selectedElement={selectedElement} />
                                     <EditModeControler/>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="templateEdit">
                                <HelthCareTemplate />
                                <EditModeControler/>
                            </div>
                        )
                    }
                }}
            </Consumer>

        )
    }
}

export default TemplateEdit
