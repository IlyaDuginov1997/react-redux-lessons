import React from 'react';
import {AccordionTitle} from './AccordionTitle/AccordionTitle';
import {AccordionBody} from './AccordionBody/AccordionBody';
import {ItemsObjType} from '../../App';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
    items: ItemsObjType[]
    onClickItem: (title: string) => void
}



export function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClickItem}/>}
        </div>
    )
}

