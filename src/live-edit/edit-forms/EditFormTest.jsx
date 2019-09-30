import React, { Component } from 'react'
import { Consumer } from '../../live-edit/template-edit/templates - context/TemplateContext'


export class EditFormTest extends Component {

    handleChageGroup = e => {
        console.log(e.target.className)
    }
    render() {
        let groupToShow = '';
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="formWrapper">
                            <div className="formWrapper-header">
                                <div onClick={this.handleChageGroup}
                                    className="formWrapper-header_content">
                                    <h4
                                    >Content</h4>
                                </div>
                                <div
                                    onClick={this.handleChageGroup}
                                    className="formWrapper-header_Style">
                                    <h4>Style</h4>
                                </div>
                                <div onClick={this.handleChageGroup}
                                    className="formWrapper-header_advanced">
                                    <h4>Advanced</h4>
                                </div>
                            </div>

                            <div className="formWrapper-footer">
                                <div
                                    onClick={this.handleViewChage}
                                    className="formWrapper-footer_pc">

                                </div>
                                <div
                                    onClick={this.handleViewChage}
                                    className="formWrapper-footer_tablet">

                                </div>
                                <div
                                    onClick={this.handleViewChage}
                                    className="formWrapper-footer_phone">

                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditFormTest
