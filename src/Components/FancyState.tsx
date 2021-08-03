import React, {useMemo, useState} from 'react';

function generateData() {
    console.log('generateData')
    let fake = 0
    while (fake < 10000000) {
        fake++
    }
    return fake
}

export const FancyState = () => {
    console.log('FancyState rendering')
    // рабочий код, но с применением хука useMemo
    // let initValue = useMemo(generateData, [])
    // let [counter, setCounter] = useState<number>(initValue)


    // особенность хука useState
    let [counter, setCounter] = useState<number>(generateData)


    function sum(state: number) {
        return state + 1
    }

    return (
        <div>
            {/*рабочий код с передачей фиксированного значения в setCounter*/}
            {/*<button onClick={setCounter(counter + 1)}>+</button>*/}


            <button onClick={() => setCounter(sum)}>+</button>
            <span>{counter}</span>
        </div>
    )
}