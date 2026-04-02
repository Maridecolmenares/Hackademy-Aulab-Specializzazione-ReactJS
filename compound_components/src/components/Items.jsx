// export default function Items({ nameList }) {
//     return (
//         <>
//             {nameList.map((name, index) => <li key={index}>{name}</li>)}
//         </>
//     )
// }

export default function Items({ children }) {
    return (
        <>
            <li>{children}</li>
        </>
    )
}