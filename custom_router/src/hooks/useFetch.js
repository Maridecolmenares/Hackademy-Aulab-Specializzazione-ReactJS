import { useState, useEffect } from "react";

export default function useFetch(url, ...dependencies) {
    const [data, setData] = useState();

    const getData = async () => {
        const promise = await fetch(url);
        const json = await promise.json();
        setData(json);
    }

    useEffect(
        () => {
            getData();
        }, dependencies
    )

    return data;
}