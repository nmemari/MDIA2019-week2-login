import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import styles from '../styles/Counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
            <div>Counter Page</div>
            <div>Welcome {isUser}</div>

            <div>{number}</div>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Decrement</button>
        </>
    )
}