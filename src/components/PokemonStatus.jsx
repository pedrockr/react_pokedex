import "./PokemonStatus.css"

const PokemonStatus = (props) => {
    const {pokemonStatus} = props
    if(pokemonStatus){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Hp</th>
                        <th>Atk</th>
                        <th>Def</th>
                        <th>S-Atk</th>
                        <th>S-Def</th>
                        <th>Spd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pokemonStatus[0].base_stat}</td>
                        <td>{pokemonStatus[1].base_stat}</td>
                        <td>{pokemonStatus[2].base_stat}</td>
                        <td>{pokemonStatus[3].base_stat}</td>
                        <td>{pokemonStatus[4].base_stat}</td>
                        <td>{pokemonStatus[5].base_stat}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    
}

export default PokemonStatus