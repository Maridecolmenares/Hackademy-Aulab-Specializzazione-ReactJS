import Items from "./Items";

// export default function List({ namaList }) {
//     return (
//         <ul>
//             <Items nameList={nameList}></Items>
//         </ul>
//     )
// }

export default function List({ children }) {
    return (
        <ul>
            {children}
        </ul>
    )
}

List.Items = Items;