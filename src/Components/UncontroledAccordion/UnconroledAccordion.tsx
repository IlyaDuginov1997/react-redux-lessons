import React, {useReducer} from 'react';
import {UnconrolledAccordionTitle} from './UnconrolledAccordionTitle/UnconrolledAccordionTitle';
import {UnconrolledAccordionBody} from './UnconrolledAccordionBody/UnconrolledAccordionBody';


type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

function reducer(state: StateType, action: ActionType): StateType {
    if (action.type === 'COLLAPSED') {
        return {...state, collapsed: !state.collapsed}
    }

    return state

}

let state: StateType = {
    collapsed: false
}

export function UnconrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false);
    let [mode, dispatch] = useReducer(reducer, state);
    return (
        <div>
            {/*ниже пишу с хуком useReducer*/}
            {/*<UnconrolledAccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
            {/*{collapsed && <UnconrolledAccordionBody/>}*/}

            <UnconrolledAccordionTitle title={props.title} dispatch={dispatch}/>

            {mode.collapsed && <UnconrolledAccordionBody/>}
        </div>
    )
}

