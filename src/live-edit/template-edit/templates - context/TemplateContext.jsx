import React from 'react';

import reducer from './TemplatesReducers'


const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        //templateID ili template name
        selectedElement: '',
        editMode: '',
        
        header: {
            backgroundImge: {
                backgroundImage: "url()",
                backgroundRepeat: '',
                backgroundPosition: '',
                backgroundSize: '',
                backgroundOrigin: '',
                // for parallax
                backgroundAttachment: '',
                // fallback color

                //balend mode Lvl3
                // backgroundBlendMode: '',

            },
            backgroundVIdeo: {

            },
            backgroundSolidCOlor: {
                backgroundColor: '',
            },
            title: {
                // selectionKey: 'header.title',
                // selectionKey: {
                //     id:'header.title',
                //     type: 'text',
                //     actionType:'EDIT_HEADER_TITILE'
                // },
                id: 'headerTitle',
                actionType:'EDIT_HEADER_TITILE',
                content: "Main titile2",
                fontSize: '' + 'px',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",

                //new
                letterSpacing: '',
                marignTop: '1',
                marignLeft: '2',
                marignBottom: '3',
                marignRight: '4',
                paddingTop: '5',
                paddingLeft: '6',
                paddingBottom: '7',
                paddingRight: '8',
            },
            description: {
                id: "headerDescription",
                content: "Description of THe page Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat autem voluptates et, enim numquam.Ipsum repellat autem voluptates et, enim numquam.",
                fontSize: '' + 'px',
                fontType: "",
                fontWeight: "",
                fontColor: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",
                letterSpacing:'',


            },
            buttonLeft: {
                id:'headerBtnLeft',
                actionType:'EDIT_HEADER_BUTTON_LEFT',
                background: '',
                border: '',
                borderThickness: '',
                borderType: '',
                borderColor: '',
                borderRadius: '',

                content: "Button Left",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",

                boxShadowColor: 'red',
                boxShadowBlur: '10px',
                boxShadowSpread: '10px',
                boxShadowHorizontal: '10px',
                boxShadowVertical: '10px',

                hover: {
                    background: '',
                    border: '',
                    borderThiknes: '',
                    borderType: '',
                    borderColor: '',
                    borderRadius: '',

                    content: "Button Left hover",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "red",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",

                    boxShadowColor: '',
                    boxShadowBlurRadius: '',
                    boxShadowSpreadRadius: '',
                    boxShadowHorizontal: '',
                    boxShadowVertical: '',
                }

            },
            buttonRight: {
                id:'headerBtnRight',
                actionType:'EDIT_HEADER_BUTTON_RIGHT',
                background: '',
                border: '',
                borderThiknes: '',
                borderType: '',
                borderColor: '',
                borderRadius: '',

                content: "Button right Learn more",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",

                boxShadowColor: 'red',
                boxShadowBlur: '10px',
                boxShadowSpread: '10px',
                boxShadowHorizontal: '10px',
                boxShadowVertical: '10px',

                hover: {
                    background: '',
                    border: '',
                    borderThiknes: '',
                    borderType: '',
                    borderColor: '',
                    borderRadius: '',

                    content: "Button Left hover",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",

                    boxShadowColor: '',
                    boxShadowBlurRadius: '',
                    boxShadowSpreadRadius: '',
                    boxShadowHorizontal: '',
                    boxShadowVertical: '',
                }

            },
        },

        offers: {
            title: {
                id:"offersTitle",
                content: "Offers main title",
                fontSize: '50px',
                fontType: "",
                fontWeight: "500",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "center",
                textDecoration: "",
                lineHeight: "",

            },
            card1: {
                title: {
                   
                    content: "card 1 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                button: {

                },
                icon: {
                    icon: 'fas fa-leaf',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            card2: {
                title: {
                    content: "card 2 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                button: {

                },
                icon: {
                    icon: 'fas fa-user-md',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            card3: {
                title: {
                    content: "card 3 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                button: {

                },
                icon: {
                    icon: 'fas fa-briefcase-medical',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            card4: {
                title: {
                    content: "card 4 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                button: {

                },
                icon: {
                    icon: 'fas fa-notes-medical',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            }
        },

        boxies: {
            title: {
                id: "boxiesTitle",
                content: "Boxies main title",
                fontSize: '50px',
                fontType: "",
                fontWeight: "500",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "center",
                textDecoration: "",
                lineHeight: "",

            },
            description: {
                id:'boxiesDescription',
                content: "description boxies",
                fontSize: "",
                fontType: "",
                fontWeight: "",
                fontColor: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",

            },
            box1: {
                title: {
                    content: "box 1 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box2: {
                title: {
                    content: "box 2 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box3: {
                title: {
                    content: "box 3 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box4: {
                title: {
                    content: "box 4 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box5: {
                title: {
                    content: "box 5 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box6: {
                title: {
                    content: "box 6 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box7: {
                title: {
                    content: "box 7 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            box8: {
                title: {
                    content: "box 8 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",

                },
                description: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    fontSize: "",
                    fontType: "",
                    fontWeight: "",
                    fontColor: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                icon: {
                    icon: 'far fa-check-circle',
                    color: '',
                    fontSize: '',
                    // textAlign: 'right'
                }

            },
            button: {

                background: '',
                border: '',
                borderThiknes: '',
                borderType: '',
                borderColor: '',
                borderRadius: '',

                content: "Button Boxies",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",

                boxShadowColor: 'red',
                boxShadowBlur: '10px',
                boxShadowSpread: '10px',
                boxShadowHorizontal: '10px',
                boxShadowVertical: '10px',

                hover: {
                    background: '',
                    border: '',
                    borderThiknes: '',
                    borderType: '',
                    borderColor: '',
                    borderRadius: '',

                    content: "Button Left hover",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",

                    boxShadowColor: '',
                    boxShadowBlurRadius: '',
                    boxShadowSpreadRadius: '',
                    boxShadowHorizontal: '',
                    boxShadowVertical: '',
                }

            },

        },

        contact: {
            title: {
                id:"contactTitle",
                content: "GET IN TOUCH TODAY Contact title",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",
            },
            button: {
                background: '',
                border: '',
                borderThiknes: '',
                borderType: '',
                borderColor: '',
                borderRadius: '',

                content: "Book Appointmant C",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",

                boxShadowColor: '',
                boxShadowBlur: '',
                boxShadowSpread: '',
                boxShadowHorizontal: '',
                boxShadowVertical: '',

                hover: {
                    background: '',
                    border: '',
                    borderThiknes: '',
                    borderType: '',
                    borderColor: '',
                    borderRadius: '',

                    content: "",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",

                    boxShadowColor: '',
                    boxShadowBlurRadius: '',
                    boxShadowSpreadRadius: '',
                    boxShadowHorizontal: '',
                    boxShadowVertical: '',
                }
            }

        },

        getStarted: {
            title: {
                id:'getStartedTitle',
                content: "GET STARTED Main titile",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",

            },
            description: {
                id:'getStartedDescription',
                content: "Description of THe page Lorem ipsum dolor sit amet consectetur.",
                fontSize: "",
                fontType: "",
                fontWeight: "",
                fontColor: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",

            },
            button: {

                background: '',
                border: '',
                borderThiknes: '',
                borderType: '',
                borderColor: '',
                borderRadius: '',

                content: "Button Get Started",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",

                boxShadowColor: 'red',
                boxShadowBlur: '10px',
                boxShadowSpread: '10px',
                boxShadowHorizontal: '10px',
                boxShadowVertical: '10px',

                hover: {
                    background: '',
                    border: '',
                    borderThiknes: '',
                    borderType: '',
                    borderColor: '',
                    borderRadius: '',

                    content: "Button Left hover",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",

                    boxShadowColor: '',
                    boxShadowBlurRadius: '',
                    boxShadowSpreadRadius: '',
                    boxShadowHorizontal: '',
                    boxShadowVertical: '',
                }

            },
        },

        footer: {
            title: {
                id:'footerTitle',
                content: "Main footer titile",
                fontSize: '',
                fontType: "",
                fontWeight: "",
                color: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",

            },
            description: {
                id:'footerDescription',
                content: "Description of THE FOOTER  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat autem voluptates et, enim numquam.Ipsum repellat autem voluptates et, enim numquam.",
                fontSize: "",
                fontType: "",
                fontWeight: "",
                fontColor: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",

            },
            navigation1: {
                title: {
                    content: "Nav1 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                items: [
                    {
                        content: "Nav1 titile",
                        fontSize: '',
                        fontType: "",
                        fontWeight: "",
                        color: "",
                        textTransform: "",
                        fontStyle: "",
                        textAlign: "",
                        textDecoration: "",
                        lineHeight: "",
                        hover: {
                            //
                        }
                    }

                ],


            },
            navigation2: {
                title: {
                    content: "Nav2 titile",
                    fontSize: '',
                    fontType: "",
                    fontWeight: "",
                    color: "",
                    textTransform: "",
                    fontStyle: "",
                    textAlign: "",
                    textDecoration: "",
                    lineHeight: "",
                },
                items: [
                    {
                        content: "Nav1 titile",
                        fontSize: '',
                        fontType: "",
                        fontWeight: "",
                        color: "",
                        textTransform: "",
                        fontStyle: "",
                        textAlign: "",
                        textDecoration: "",
                        lineHeight: "",
                        hover: {
                            //
                        }
                    }

                ],


            },

        },

        dispatch: action => this.setState(state => reducer(state, action)),

    }

    render() {

        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;
