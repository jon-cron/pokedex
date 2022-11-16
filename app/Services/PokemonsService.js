import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});
const myApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jonc/pokemon",
});

class PokemonsService {
  async getPokemons() {
    const res = await pokeApi.get();
    appState.pokemons = res.data.results;
    console.log(appState.pokemons);
  }
  async getOnePokemon(name) {
    const res = await pokeApi.get(name);
    console.log(res.data);
    appState.activePokemon = new Pokemon(res.data);
  }
  async getThatPokemon() {
    let pokemon = appState.activePokemon;
    const res = await myApi.post("", pokemon);
    console.log("[Got Pokemon]", res.data);
    appState.myPokemon = res.data;
  }
}

export const pokemonsService = new PokemonsService();
