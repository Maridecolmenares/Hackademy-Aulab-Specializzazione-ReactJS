import { useContext, useState } from "react"
import { Context } from "../context/Context"

export default function Homepage() {

    const { data, changeData } = useContext(Context);
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e) => setNewMessage(e.target.value);
    const handleClick = () => changeData(newMessage);

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">Homepage</h1>
            <h2 className="text-xl text-center">{data}</h2>

            <div id="form_section" className="flex justify-center gap-2 mt-4">
                <input
                    className="input input-bordered"
                    placeholder="New message"
                    onChange={handleChange}
                />
                <button className="btn btn-primary" onClick={handleClick}>
                    Click here
                </button>
            </div>
        </>
    )
}

// useContext - hook per richiamare tutti i dati da uno specifico Context