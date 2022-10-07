import "./PokemonImage.css";
const PokemonImage = (props) => {
    const {pokemonName, pokemonId} = props

    if(pokemonId){
      return (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`}
          alt={pokemonName}
          className="PokemonImage"
        />
      );
    }  
};

export default PokemonImage;
