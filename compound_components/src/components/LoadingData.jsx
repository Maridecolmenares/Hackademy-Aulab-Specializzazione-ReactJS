import { useEffect, useState } from "react";

export default function LoadingData() {

    const [users, setUsers] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        if (trigger) {
            setTimeout(() => {
                getUsers();
                setIsLoading(false);
            }, 2000);
        }
    }, [trigger]);

    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
            setTrigger(false);
            setUsers([]);
        } else {
            setIsVisible(true);
            setTrigger(true);
            setIsLoading(true);
        }
    }

    return (
        <>
            <h2>Users</h2>
            <button onClick={handleClick}>Load Users</button>

            {isLoading && <p>Loading users...</p>}

            <ul>
                {isVisible && users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}