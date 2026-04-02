// export default function Input({ handleChange }) {
//     return (
//         <>
//             <input type="text" onChange={handleChange} />
//         </>
//     )
// }


// Compound components
export default function Input({ onChange }) {
    return (
        <input type="text" onChange={onChange} placeholder="Insert name" />
    )
}