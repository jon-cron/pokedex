import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokeList() {
  let pokemon = appState.pokemons;
  let template = "";
  pokemon.forEach((p) => (template += Pokemon.PokeList(p)));
  setHTML("poke-list", template);
}
function _drawActive() {
  let active = appState.activePokemon;
  setHTML("active-pokemon", active.ActivePokemon);
}
function _drawMyPokemon() {
  let pokemons = appState.myPokemon;
  let template = "";
  pokemons.forEach((p) => (template += p.MyPokemonTemplate));
  setHTML("my-pokemon", template);
}

export class PokemonsController {
  constructor() {
    this.getPokemons();
    this.getMyPokemon();
    appState.on("pokemons", _drawPokeList);
    appState.on("activePokemon", _drawActive);
    appState.on("myPokemon", _drawMyPokemon);
    _drawPokeList();
  }
  async getPokemons() {
    try {
      await pokemonsService.getPokemons();
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }
  async getOnePokemon(name) {
    await pokemonsService.getOnePokemon(name);
  }
  async getThatPokemon() {
    await pokemonsService.getThatPokemon();
  }
  async getMyPokemon() {
    try {
      await pokemonsService.GetMyPokemon();
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }
  async getOneMyPokemon(id) {
    await pokemonsService.getOneMyPokemon(id);
    console.log(id);
  }
  async removePokemon() {
    try {
      await pokemonsService.removePokemon();
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }
}
