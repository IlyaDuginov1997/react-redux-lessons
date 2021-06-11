import React from 'react';

type OnOffType = {
    setOnButton: (value: boolean) => void
    onButton: boolean
}

export function OnOff(props: OnOffType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.onButton ? 'green' : 'white',
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.onButton ? 'white' : 'red',

    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.onButton ? 'green' : 'red',

    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.setOnButton(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.setOnButton(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}