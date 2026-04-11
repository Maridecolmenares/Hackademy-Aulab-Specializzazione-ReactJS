import { useContext, useState } from "react"
import { Context } from "../context/Context"

export default function Homepage() {

    const { data, changeData } = useContext(Context);
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e) => setNewMessage(e.target.value);
    const handleClick = () => changeData(newMessage);

    return (
        <>
            <h1>Homepage</h1>
            <h2>{data}</h2>
            <div id="form_section">
                <input type="text" placeholder="New message" onChange={handleChange} />
                <button onClick={handleClick}>Click here!</button>
            </div>
        </>
    )
}

// useContext - hook per richiamare tutti i dati da uno specifico Context