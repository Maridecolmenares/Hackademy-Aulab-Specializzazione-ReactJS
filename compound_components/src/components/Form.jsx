function Form({ children, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>{children}</form>
    )
}

function Input({ onChange, value }) {
    return (
        <input type="text" onChange={onChange} value={value} />
    )
}

function Button({ children }) {
    return (
        <button type="submit">{children}</button>
    )
}

Form.Input = Input;
Form.Button = Button;

export default Form;