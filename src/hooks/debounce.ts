import { useEffect, useState } from "react";

export function useCitySuggest(from: string, to: string, delay = 300): Array<string> {
    const [fromValue, setfromValue] = useState(from)

    useEffect(() => {
        const handler = setTimeout(() => setfromValue(from), delay)
        return () => clearTimeout(handler)
    }, [from, delay])

    const [toValue, setToValue] = useState(to)

    useEffect(() => {
        const handler = setTimeout(() => setToValue(to), delay)
        return () => clearTimeout(handler)
    }, [to, delay])

    return [fromValue, toValue]
}

export function useCountrySuggest(from: string, to: string, delay = 300): Array<string> {
    const [fromValue, setfromValue] = useState(from)

    useEffect(() => {
        const handler = setTimeout(() => setfromValue(from), delay)
        return () => clearTimeout(handler)
    }, [from, delay])

    const [toValue, setToValue] = useState(to)

    useEffect(() => {
        const handler = setTimeout(() => setToValue(to), delay)
        return () => clearTimeout(handler)
    }, [to, delay])

    return [fromValue, toValue]
}