import { useContext, useState } from "react";
import { UserContext } from "../context/UseContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { register } = useContext(UserContext);

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            setUserName(e.target.value);
        } else if (e.target.id === 'email') {
            setUserEmail(e.target.value);
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (userName, userEmail) {
            register({ name: userName, email: userEmail });
        }
        navigate('/');
    }

    return (
        <>
            <h1>Register</h1>

            <main id="form_section">
                <form id="custom_form" onSubmit={handlesubmit}>
                    <input type="text" placeholder="Name" className="custom_input" id="name" onChange={handleChange} />
                    <input type="email" placeholder="Email" className="custom_input" id="email" onChange={handleChange} />
                    <button id="form_btn">Register</button>
                </form>
            </main >
        </>
    );
}