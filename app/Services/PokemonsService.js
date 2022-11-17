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
    // console.log(appState.pokemons);
  }
  async getOnePokemon(name) {
    const res = await pokeApi.get(name);
    console.log(res.data);
    appState.activePokemon = new Pokemon(res.data);
  }

  async getThatPokemon() {
    let pokemon = appState.activePokemon;
    const res = await myApi.post("", pokemon);
    // console.log("[Got Pokemon]", res.data);
    appState.myPokemon = [...appState.myPokemon, new Pokemon(res.data)];
    console.log(appState.myPokemon);
  }
  async GetMyPokemon() {
    const res = await myApi.get();
    console.log(res.data);
    appState.myPokemon = res.data.map((p) => new Pokemon(p));
  }
  async getOneMyPokemon(id) {
    let pokemon = appState.myPokemon.find((p) => p.id == id);
    appState.activePokemon = pokemon;
  }
  async removePokemon() {
    let removePokemon = appState.activePokemon;
    const res = await myApi.delete(removePokemon.id);
    console.log("deleted", res.data);
    appState.myPokemon = appState.myPokemon.filter(
      (p) => p.id != removePokemon.id
    );
    appState.activePokemon = null;
  }
}

export const pokemonsService = new PokemonsService();
