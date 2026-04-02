import List from "./List";
import Section from "./Section";

// Prop drilling
// export default function Main({ nameList }) {
//     return (
//         <main>
//             <List nameList={nameList}></List>
//         </main >
//     )
// }

export default function Main({ children }) {
    return (
        <main>
            {children}
        </main >
    )
}

Main.List = List;
Main.Section = Section;