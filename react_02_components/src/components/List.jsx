export default function List({ nomi }) {
    return (
        <ul>
            {nomi.map((nome) => {
                return (
                    <li key={nome}>{nome}</li>
                )
            })}
        </ul>
    )
}