//ovde ode prebacu sve reducers nije povezano sa context 


import {
    EDIT_HEADER_TITILE,
    EDIT_HEADER_DESCRIPTION,
    EDIT_HEADER_BUTTON_LEFT,
    EDIT_HEADER_BUTTON_RIGHT,

    EDIT_OFFERS_TITILE,

    EDIT_BOXIES_TITILE,
    EDIT_BOXIES_DESCRIPTION,

    EDIT_CONTACT_TITILE,

    EDIT_GET_STARTED_TITILE,
    EDIT_GET_STARTED_DESCRIPTION,

    EDIT_FOOTER_TITILE,
    EDIT_FOOTER_DESCRIPTION,




    SELECTED_ELEMENT,
    EDITMODE_CONTROLER

} from './TemplateTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case EDIT_HEADER_TITILE:
            return {
                ...state.header.title,
                title: [state.header.title].map(key => {
                    console.log(` from context ${action.payload}`)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_HEADER_DESCRIPTION:
            return {
                ...state.header.title,
                description: [state.header.description].map(key => {
                    console.log(action.payload)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_HEADER_BUTTON_LEFT:
            return {
                ...state.header.title,
                btnLeft: [state.header.buttonLeft].map(key => {
                    console.log(action.payload)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_HEADER_BUTTON_RIGHT:
            return {
                ...state.header.title,
                btnRight: [state.header.buttonRight].map(key => {
                    console.log(action.payload)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }

        case EDIT_OFFERS_TITILE:
            return {
                ...state.header.title,
                title: [state.offers.title].map(key => {
                    console.log(` from context ${action.payload}`)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }

        case EDIT_BOXIES_TITILE:
            return {
                ...state.header.title,
                title: [state.boxies.title].map(key => {
                    console.log(` from context ${action.payload}`)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_BOXIES_DESCRIPTION:
            return {
                ...state.header.title,
                description: [state.boxies.description].map(key => {
                    console.log(action.payload)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_CONTACT_TITILE:
            return {
                ...state.header.title,
                title: [state.contact.title].map(key => {
                    console.log(` from context ${action.payload}`)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_GET_STARTED_TITILE:
            return {
                ...state.header.title,
                title: [state.getStarted.title].map(key => {
                    console.log(` from context ${action.payload}`)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_GET_STARTED_DESCRIPTION:
            return {
                ...state.header.title,
                description: [state.getStarted.description].map(key => {
                    console.log(action.payload)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }

        case EDIT_FOOTER_TITILE:
            return {
                ...state.header.title,
                title: [state.footer.title].map(key => {
                    console.log(` from context ${action.payload}`)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }
        case EDIT_FOOTER_DESCRIPTION:
            return {
                ...state.header.title,
                description: [state.footer.description].map(key => {
                    console.log(action.payload)
                    key[`${action.payload.property}`] = action.payload.value
                    // console.log(key[`${action.payload.property}`])
                })
            }



        case SELECTED_ELEMENT:
            return {
                ...state,
                // selectionKey: state.selectionKey = action.payload.id,
                selectedElement: state.selectedElement = action.payload.id
            }
        case EDITMODE_CONTROLER:
            return {
                ...state,
                // selectionKey: state.selectionKey = action.payload.id,
                editMode: state.editMode = action.payload
            }
        default:
            return state;
    }
}

export default reducer;