import React, {useState} from 'react';
import {UnconrolledAccordionTitle} from './UnconrolledAccordionTitle/UnconrolledAccordionTitle';
import {UnconrolledAccordionBody} from './UnconrolledAccordionBody/UnconrolledAccordionBody';


type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

export function UnconrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);


    return (
        <div>
            <UnconrolledAccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <UnconrolledAccordionBody/>}
        </div>
    )
}

