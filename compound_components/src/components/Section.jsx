import Button from "./Button";
import Input from "./Input";

// Prop drilling
// export default function Section({ newName, handleChange, addNewName }) {
//     return (
//         <>
//             <section>
//                 <Input handleChange={handleChange}></Input>
//                 <Button newName={newName} addNewName={addNewName}></Button>
//             </section>
//         </>
//     )
// }

// Compound components
export default function Section({ children }) {
    return (
        <section>
            {children}
        </section>
    )
}

Section.Input = Input;
Section.Button = Button;