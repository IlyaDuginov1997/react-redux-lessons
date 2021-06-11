import React from 'react';

type StarTypeProps = {
    selected: boolean
    setValue: () => void
}

export function Star(props: StarTypeProps) {
    return <span onClick={() => {
        props.setValue()
    }}> {props.selected ? <b>Star </b> : 'star '} </span>
}
