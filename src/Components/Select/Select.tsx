import React from 'react';
import {ItemsObjType} from '../../App';

type SelectPropsType = {
    selectItems: Array<ItemsObjType>
    selected: boolean
    changeSelect: (selected: boolean) => void
    title: string
    changeTitle: (title: string) => void
}

export function Select(props: SelectPropsType) {

    const selectItem = props.selectItems.map(i => <li key={i.id}
                                                      onClick={ () => props.changeTitle(i.title) }>{i.title}</li>)

    return (
        <div>
            <h3 onClick={ () => {props.changeSelect(!props.selected)} }>{props.title}</h3>
            {props.selected && <ul>
                {selectItem}
            </ul>}

        </div>
    )
}