import './Pokedex.css';
import layout from '../assets/pokedex-layout.png';

const Pokedex = ({ pokemon, search, setSearch, onSearch }) => {

  return (
    <div className="pokedex-wrapper">
      <h1 className="pokedex-title">Pokédex</h1>  
      <img src={layout} alt="Pokedex Layout" className="pokedex-bg" />

      {/* Tela esquerda (imagem do pokémon) */}
      <div className="pokemon-image">
        {pokemon ? (
          <img   src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                 alt={pokemon.name} 
                 />
        ) : (
          <p>?</p>
        )}
      </div>

      {/* Tela direita (informações do pokémon) */}
      <div className="pokemon-info">
        {pokemon ? (
          <>
            <strong>{pokemon.name.toUpperCase()}</strong>
            <p><b>Tipo:</b> {pokemon.types.map(t => t.type.name).join(', ')}</p>
            <p><b>Altura:</b> {pokemon.height / 10} m</p>
            <p><b>Peso:</b> {pokemon.weight / 10} kg</p>
            <p><b>Habilidades:</b> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
          </>
        ) : (
          <p>Busque um Pokémon...</p>
        )}
        <form
        onSubmit={(e) => {
            e.preventDefault();
            onSearch();
        }}
        style={{ marginTop: '50px' }}
        >
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nome do Pokémon"
            className="search-input"
        />
        <button type="submit" className="search-btn">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default Pokedex;
