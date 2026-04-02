// export default function Button({ newName, addNewName }) {
//     return (
//         <>
//             <button onClick={() => addNewName(newName)}>Click Here!</button>
//         </>
//     )
// }

export default function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}