import React from 'react';
import {RatingValueType} from '../Rating';

type StarTypeProps = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

export function Star(props: StarTypeProps) {
    return <span onClick={ () => {props.onClick(props.value)} }> {props.selected ? <b>Star </b> : 'star '} </span>
}
