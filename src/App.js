import './App.css';
import PokedexBackground from "./assets/images/pokedex-retro.png";
import next from "./assets/images/next.png";
import prev from "./assets/images/prev.png";
import PokemonImage from './components/PokemonImage';
import { useEffect, useState } from 'react';
import {pokemonData} from "./components/PokeApi"
import PokemonStatus from "./components/PokemonStatus"
import PokemonFlavor from './components/PokemonFlavor';
import PokemonType from './components/PokemonType';

function App() {
  const [pokeCounterId, setpokeCounterId] = useState(1);
  const [pokemonSearchValue, setpokemonSearchValue] = useState();
  const [pokemonDataSheet, setpokemonDataSheet] = useState([]);
  const [pokemonType, setPokemonType]=useState([])

//funcoes para lidar com api
  const handlePokemonSelect = async (PokemonImageNumber)=>{
    const result = await pokemonData(PokemonImageNumber)
    if(result){
      setpokemonDataSheet(result)
      setpokeCounterId(result.id)
      setPokemonType(result.types)
    }else{
      alert("Pokemon não encontrado");
    }
  }
  useEffect(() => {
    handlePokemonSelect(pokeCounterId)
  }, [pokeCounterId]);

//funcoes para selecionar o pokemon
  function handleNextButton (){
      setpokeCounterId(pokeCounterId + 1)
  }
  function handlePrevButton() {
    if(pokeCounterId <= 1){
      setpokeCounterId(1)
    }else{
      setpokeCounterId(pokeCounterId - 1)
    }
  }
  
//funcoes para lidar com o campo de busca
  function handlePokemonInput(e){
    setpokemonSearchValue(e.target.value)
  }

  const handleSearchPokemon = () =>{
    if(pokemonSearchValue){
      handlePokemonSelect(pokemonSearchValue)
      setpokemonSearchValue('')
    }
  }
  
  return (
    <div className="App">
      <main>
        <img src={PokedexBackground} alt="Pokedex" className="pokedex-background" />
        <PokemonImage pokemonId = {pokemonDataSheet.id} pokemonName = {pokemonDataSheet.name}/>
        <h1 className='pokemon-name'>{(pokemonDataSheet.name)}</h1>
        <div className='search-container'>
          <input type="text" placeholder='buscar pokemon' onChange={handlePokemonInput} value={pokemonSearchValue}></input>
          <button onClick={handleSearchPokemon} className="button-search">buscar</button>
        </div>
        <div className="buttons">
          <button className='button' onClick={handlePrevButton}><img src={prev} alt="seta para esquerda" className='img-button'></img></button>
          <button className='button' onClick={handleNextButton}><img src={next} alt="seta para direita" className='img-button'></img></button>
        </div>
        <PokemonFlavor pokemonId={pokemonDataSheet.id}/>
        <PokemonStatus pokemonStatus={pokemonDataSheet.stats}/>
        <PokemonType types = {pokemonType}/>
        <div className='weight'>
          <label>Peso(kg) </label>
          <h2>{pokemonDataSheet.weight / 10}</h2>
        </div>
        <div className='height'>
          <label>Altura(m) </label>
          <h2>{pokemonDataSheet.height / 10}</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
