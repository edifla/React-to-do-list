export function Search({ search, setSearch }) {
    return (
        <div>
            <input type="text" className="search" placeholder="Escreva o termo que deseja buscar" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}