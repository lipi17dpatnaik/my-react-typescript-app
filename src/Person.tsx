import { useState } from 'react';

interface Props {
    name: string;
    email: string;
    age: number;
}

export const Person = (props: Props) => {

    const [state, setState] = useState<string>("")

    const getAge = (name: string): number => {
        return 100;
    }
    return (
        <div>
            <h1> Name: {props.name}</h1>
            <h1> Email: {props.email}</h1>
            <h1> Age: {props.age}</h1>
        </div>
    )
}