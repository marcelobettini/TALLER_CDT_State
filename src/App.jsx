import { useEffect, useReducer } from "react";
import pokemonReducer from "./reducer/pokemonReducer";
import pokemonContext from "./context/pokemonContext";
import "./App.css";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import { actions } from "./actions/pokemonActions";

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    data: [],
    filter: "",
    selectedPokemon: null,
  });

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: actions.set_data,
          payload: json,
        })
      );
  }, []);

  {
    if (!state.data) return <div>fetching bichitos...</div>;
  }
  // { if (error) return <div>{error.message}</div> }

  return (
    <pokemonContext.Provider value={{ state, dispatch }}>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "60vw",
          paddingTop: "1rem",
        }}
      >
        <h1 className="title">Pokemon Search</h1>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "80% 20%",
            gap: "2rem",
          }}
        >
          <div>
            <PokemonFilter />

            <PokemonTable />
          </div>
          {/* solo si hay un selectedPokemon vamos a mostrar el componente porque hacemos conditional rendering en PokemonInfo*/}
          <PokemonInfo />
        </div>
      </div>
    </pokemonContext.Provider>
  );
}

export default App;
