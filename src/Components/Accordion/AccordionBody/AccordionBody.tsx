import React from 'react';
import {ItemsObjType} from '../../../App';

type AccordionBodyPropsType = {
    items: Array<ItemsObjType>
    onClick: (title: string) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {

    let items = props.items.map((i) => {
        return (
            <li key={i.id} onClick={ () => {props.onClick(i.title)} }>{i.title}</li>
        )
    })

    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}