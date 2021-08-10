import React, {useEffect, useState} from 'react';

export const UseEffectExample = () => {

    let [counter, setCounter] = useState<number>(0)
    let [fake, setFake] = useState<number>(0)
    console.log('useEffectExample')
    useEffect(() => {
        debugger
        console.log('useEffect is render')
        alert(counter)
    }, [counter])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>counter</button>
            <div> {counter} </div>
            <button onClick={() => setFake(fake + 1)}>fake</button>
            <div> {fake} </div>
        </div>
    )
}