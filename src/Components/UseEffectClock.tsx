import React, {useEffect, useState} from 'react';

let a = new Date()
let hoursNow = a.getHours()
let minutesNow = a.getMinutes()
let secondsNow = a.getSeconds()

console.log(a)

export const UseEffectClock = () => {

    let [hours, setHours] = useState<number>(hoursNow)
    let [minutes, setMinutes] = useState<number>(minutesNow)
    let [seconds, setSeconds] = useState<number>(secondsNow)

    if (seconds === 60) {
        setMinutes((state) => state + 1)
        setSeconds(0)
    }

    if (minutes === 60) {
        setHours((state) => state + 1)
        setMinutes(0)
        setSeconds(0)
    }

    if (hours === 24) {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
    }

    useEffect(() => {
        setInterval(() => {
            setSeconds((state) => state + 1)
        }, 1000)
        if (seconds === 60) {
            setMinutes((state) => state + 1)
            setSeconds(0)
        }
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