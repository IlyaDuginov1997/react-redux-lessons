import React from 'react';
import {ActionType} from '../UnconroledAccordion';


type AccordionTitlePropsType = {
    title: string
    dispatch: (action: ActionType) => void
}

export function UnconrolledAccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            {/*ниже пишу с хуком useReducer*/}
            {/*<h3 onClick={ () => { props.setCollapsed(!props.collapsed) } }> {props.title} </h3>*/}

            <h3 onClick={ () => { props.dispatch({type: 'COLLAPSED'}) } }> {props.title} </h3>
        </div>
    )
}