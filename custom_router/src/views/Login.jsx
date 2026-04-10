export default function Login() {
    return (
        <>
            <h1>Login</h1>

            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>

                <button>Login</button>
            </form>
        </>
    )
}