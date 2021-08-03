import React, {useMemo, useState} from 'react';

export const UseMemoExample = () => {

    let [counter, setCounter] = useState<number>(0);
    let [users, setUsers] = useState<Array<string>>(['Ilya', 'Gleb', 'Anton', 'Nastya']);

    const incCounter = () => {
        setCounter(counter + 1)
    }



    const addUser = () => {
        const newUser = [...users, 'Kostya']
        setUsers(newUser)
    }

    const newArray = useMemo( () => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users] )

    return (
        <div>
            <button onClick={incCounter}>inc</button>
            <button onClick={addUser}>addUser</button>
            <Counter counter={counter}/>
            <Users users={newArray}/>
        </div>
    )
}


type CounterPropsType = {
    counter: number
}
type UsersPropsType = {
    users: Array<string>
}


const CounterSecret = (props: CounterPropsType) => {
    console.log('CounterSecret')

    return (
        <div>
            <div>{props.counter}</div>
        </div>
    )
}

const UsersSecret = (props: UsersPropsType) => {
    console.log('UsersSecret')
    const usersEl = props.users.map((u, i) => {
        return (
            <div key={i}>{u}</div>
        )
    })

    return (
        <div>{usersEl}</div>
    )
}
const Users = React.memo(UsersSecret)
const Counter = React.memo(CounterSecret)
