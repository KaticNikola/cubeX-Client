//ovde ode prebacu sve reducers nije povezano sa context 


import {
    EDIT_HEADER_TITILE,
    EDIT_HEADER_DESCRIPTION,
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
                title: [state.header.description].map(key => {
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