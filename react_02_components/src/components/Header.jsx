import Title from "./Title";

// export default function Header(props) {
//     const title = "Title";
//     return (
//         <header id="custom_header">
//             <h1>{props.title}</h1>
//             <Title title={title} />
//         </header>
//     )
// }

export default function Header({ title }) {
    return (
        <header id="custom_header">
            <Title title={title} />
        </header>
    )
}