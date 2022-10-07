export const pokemonData = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }catch (error){
        console.log("pokemonData" + error)
    }
}

export const pokemonFlavor = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }catch (error){
        console.log("pokemonData" + error)
    }
}