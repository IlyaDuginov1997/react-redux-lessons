import React, {ChangeEvent, useMemo, useState} from 'react';

export const UseMemoExampleCounter = () => {

    let [a, setA] = useState<number>(0)
    let [b, setB] = useState<number>(0)

    let resultA: number;
    let resultB = 1

    resultA = useMemo( () => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            tempResultA = tempResultA * i
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
        }
        return tempResultA
    }, [a] )



    for (let i = 1; i <= b; i++) {
        debugger
        resultB = resultB * i
    }

    const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }

    const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <input defaultValue={a} onChange={onChangeA}/>
                <span>
                    {resultA}
                </span>
            </div>
            <div>
                <input defaultValue={b} onChange={(onChangeB)}/>
                <span>
                    {resultB}
                </span>
            </div>
        </div>
    )
}