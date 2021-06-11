import React from 'react';


type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

export function UnconrolledAccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={ () => { props.setCollapsed(!props.collapsed) } }> {props.title} </h3>
        </div>
    )
}