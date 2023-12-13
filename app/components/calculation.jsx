"use client"

import { useCountStore } from "../store"


const Calculation = () => {

    const count = useCountStore((state) => state.count)
    const { increament, decreament } = useCountStore((state) => state.actions)
    return (
        <main>
            <button onClick={increament}>increamnet</button>
            <button onClick={decreament}>decreament</button>
            count is {count}
        </main>
    )
}
export default Calculation