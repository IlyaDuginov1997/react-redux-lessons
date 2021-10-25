import React, {useEffect, useState} from 'react';

function twoDigitValue(num: number) {
    if (num < 10) {
        return '0' + num
    } else {
        return num
    }
}

export const UseEffectClock2 = () => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    })

    return (
        <div>
            <div>
                <span>{twoDigitValue(date.getHours())}</span>
                : <span>{twoDigitValue(date.getMinutes())}</span>
                : <span>{twoDigitValue(date.getSeconds())}</span>
            </div>

        </div>

    )
}