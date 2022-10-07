import "./PokemonStatus.css"
import {pokemonFlavor} from "./PokeApi"
import { useEffect, useState } from "react"
import "./PokemonFlavor.css"

const PokemonFlavor = (props) =>{
    const{pokemonId} = props
    const[pokemonFlavorText, setPokemonFlavorText] = useState(1)
    
    const loadPokemonFlavor = async (pokemon)=>{
        const result = await pokemonFlavor(pokemon)
        let text = result.flavor_text_entries[0].language.name
        if(text === "en"){
            setPokemonFlavorText(result.flavor_text_entries[0].flavor_text)
        }else{
            setPokemonFlavorText(result.flavor_text_entries[1].flavor_text)
        }
    }

    useEffect(()=>{
        if(pokemonId){
            loadPokemonFlavor(pokemonId)
        }
    },[pokemonId])

    return (
        <div className="pokemon-flavor">
           <p>{pokemonFlavorText}</p> 
        </div>
    )
}

export default PokemonFlavor