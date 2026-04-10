export default function Register() {
    return (
        <>
            <h1>Register</h1>

            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>

                <button>Register</button>
            </form>
        </>
    )
}