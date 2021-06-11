import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    // collapsed: boolean
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={ () => {props.onClick()} }> {props.title} </h3>
        </div>
    )
}