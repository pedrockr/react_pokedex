import "./PokemonType.css"
const PokemonType = (props)=>{
    const pokemonType = props.types
    const typesToColor = {
        normal() {
          return "normal"
        },
        fighting(){
          return "fighting"
        },
        flying(){
          return "flying"
        },
        poison(){
          return "poison"
        },
        ground(){
          return "ground"
        },
        rock(){
          return "rock"
        },
        bug(){
          return "bug"
        },
        ghost(){
          return "ghost"
        },
        steel(){
          return "steel"
        },
        fire(){
          return "fire"
        },
        water(){
          return "water"
        },
        grass(){
          return "grass"
        },
        electric(){
          return "electric"
        },
        psychic(){
          return "psychic"
        },
        ice(){
          return "ice"
        },
        dragon(){
          return "dragon"
        },
        dark(){
          return "dark"
        },
        fairy(){
          return "fairy"
        },
      }
      
      const selecionarCor = (types) => {
        return typesToColor[types]()
      }
      
      return (        
        <div className="types">
            {props.types.map((type)=>{
                return <span className={selecionarCor(type.type.name)}><p key={type.slot}>{type.type.name}</p></span>
            })}
        </div>
      )
}

export default PokemonType