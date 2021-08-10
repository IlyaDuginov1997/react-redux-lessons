import React, {useEffect, useState} from 'react';


export const UseEffectTimesEample = () => {

    let [hours, setHours] = useState<number>(11)
    let [minutes, setMinutes] = useState<number>(11)
    let [seconds, setSeconds] = useState<number>(0)

    if (seconds === 12) {
        setMinutes((state) => state + 1)
        setSeconds(0)
    }

    if (minutes === 12) {
        setHours((state) => state + 1)
        setMinutes(0)
        setSeconds(0)
    }

    if (hours === 12) {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
    }

    useEffect(() => {
        setInterval(() => {
            debugger
            setSeconds((state) => state + 1)
        }, 1000)

    }, [])

    return (
        <div>
            <div>
                {hours}:{minutes}:{seconds}
            </div>
            <div>
                {seconds}
            </div>
        </div>

    )
}